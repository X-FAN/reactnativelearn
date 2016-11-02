/**
 * Created by TC on 2016/9/7.
 */
import  React, {
    Component,

} from 'react'
import  {BackAndroid} from 'react-native'
import ScrollableTabView  from 'react-native-scrollable-tab-view'
import GankComponent from './GankComponent'
import GirlComponent from './GirlComponent'

class GankShowComponent extends Component {

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', ()=>this.goBack());//监听安卓回退按钮
    }

    render() {
        return (
            <ScrollableTabView tabBarUnderlineStyle={{backgroundColor: '#0097A7'}} tabBarActiveTextColor='#0097A7'>
                <GankComponent navigator={this.props.navigator} url='http://gank.io/api/data/all/10/1' tabLabel='ALL'/>
                <GankComponent navigator={this.props.navigator} url='http://gank.io/api/data/Android/10/1'
                               tabLabel='ANDROID'/>
                <GankComponent navigator={this.props.navigator} url='http://gank.io/api/data/iOS/10/1' tabLabel='IOS'/>
                <GirlComponent navigator={this.props.navigator} url='http://gank.io/api/data/福利/10/1' tabLabel='福利'/>
            </ScrollableTabView>
        );

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

}

export default  GankShowComponent;