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
} from  'react-native'


var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class SecondPageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            dataSource: ds,
        };
    }

    componentWillMount() {
        this.genRows();
        BackAndroid.addEventListener('hardwareBackPress', ()=>this.goBack());//监听安卓回退按钮
    }


    render() {
        if (this.state.dataSource.getRowCount() === 0) {//没有数据时展示加载
            return (
                <View style={ {flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator
                        size='large'
                        color='#8BC34A'/>
                </View>
            );
        } else {
            return (
                //标题栏
                <View style={{flexDirection: 'column', flex: 1}}>
                    <View style={{flexDirection: 'row', backgroundColor: '#00BCD4', padding: 10}}>
                        <TouchableWithoutFeedback onPress={()=>this.goBack()}>
                            <Image style={{width: 30, height: 30}} source={require('./image/back.png') }/>
                        </TouchableWithoutFeedback>
                        <Text style={{fontSize: 20, color: "#FFFFFF"}}>安卓干货</Text>
                    </View>
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
            <View style={styles.container}>
                <Text style={styles.text}>{'标题:' + rowData.desc}</Text>
                <Text style={styles.subText}>{'推荐人:' + rowData.who}</Text>
            </View>
        )
    }

    /**
     * 网络请求获取安卓干货
     */
    getAndroidGank() {
        fetch('http://gank.io/api/data/Android/10/1')
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
        if (routers.length > 1) {
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
export  default SecondPageComponent;

