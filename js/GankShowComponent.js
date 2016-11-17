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
import SplashScreen from './SplashScreen'
class GankShowComponent extends Component {

    componentDidMount() {
        SplashScreen.hide();//隐藏欢迎页
        BackAndroid.addEventListener('hardwareBackPress', () => this.goBack());//监听安卓回退按钮
    }

    render() {
        return (
            <ScrollableTabView tabBarUnderlineStyle={{
                position: 'absolute',
                height: 3,
                backgroundColor: '#ffffff',
                bottom: 0,
            }}
                               tabBarTextStyle={{fontSize: 14}}
                               tabBarActiveTextColor='#ffffff'
                               tabBarBackgroundColor='#00BCD4' tabBarInactiveTextColor="#212121">
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