import  React, {
    Component
} from 'react'
import {
    View,
    Text,
    ListView,
    ToastAndroid,
    StyleSheet,
    BackAndroid,
    Image,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ActivityIndicator,
    RefreshControl
} from  'react-native';
import WebViewComponet from './WebViewComponet';


var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class GankComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            dataSource: ds,
        };
    }

    componentDidMount() {
        this.genRows();
        BackAndroid.addEventListener('hardwareBackPress', ()=>this.goBack());//监听安卓回退按钮
    }


    render() {
        if (this.state.dataSource.getRowCount() === 0) {//没有数据时展示'加载视图'
            return (
                <View style={ {flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator
                        size='large'
                        color='#8BC34A'/>
                </View>
            );
        } else {
            return (
                <View style={{flexDirection: 'column', flex: 1}}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData)=>this.getRow(rowData)}
                        refreshControl={//下拉刷新的配置
                            <RefreshControl
                                refreshing={this.state.isRefreshing}
                                onRefresh={()=>this.onRefresh}
                                colors={['#8BC34A']}
                                progressBackgroundColor="#ffffff"
                            />
                        }>
                    </ListView>
                </View>
            );
        }

    }

    /**
     * 获取listview的数据源
     */
    genRows() {
        this.getAndroidGank();
    }

    /**
     * 渲染listview的每行的内容
     * @param rowData
     * @returns {XML}
     */
    getRow(rowData) {
        return (
            <TouchableWithoutFeedback onPress={()=>this.jumpToGank(rowData.url)}>
                <View style={styles.container}>
                    <Text style={styles.text}>{'标题:' + rowData.desc}</Text>
                    <Text style={styles.subText}>{'推荐人:' + rowData.who}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    /**
     * 展示具体干货内容
     * @param url
     */
    jumpToGank(url) {
        if (this.props.navigator) {
            this.props.navigator.push({
                url: url,
                name: 'WebViewComponet',
                component: WebViewComponet
            });
        }
    }

    /**
     * 网络请求获取安卓干货
     */
    getAndroidGank() {
        ToastAndroid.show(this.props.url, ToastAndroid.SHORT);
        fetch(this.props.url)
            .then((response)=> {
                return response.json();
            })
            .then((responseJson)=> {
                if (responseJson.results) {
                    this.setState({isRefreshing: false, dataSource: ds.cloneWithRows(responseJson.results)});
                }
            }).catch((error)=>console.error(error))
            .done();
    }

    /**
     * 回退
     */
    goBack() {
        const nav = this.props.navigator;
        const routers = nav.getCurrentRoutes();
        if (routers.length > 1 && nav) {
            nav.pop();
            return true;
        }
        return false;
    }

    /**
     * 下拉刷新
     */
    onRefresh() {
        this.genRows();
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        backgroundColor: '#B2EBF2',
        borderRadius: 5
    },
    text: {
        fontSize: 18,
        color: '#212121'
    },
    subText: {
        fontSize: 18,
        color: '#757575'
    }
});
export  default GankComponent;

