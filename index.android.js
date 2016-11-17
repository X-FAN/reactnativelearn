import React, {
    Component
}
    from 'react';
import {
    AppRegistry,
    Navigator,
    ToastAndroid
}
    from 'react-native';

import GankShowComponent from './js/GankShowComponent'

class AwesomeProject extends Component {
    render() {
        let defaultName = 'GankShowComponent';
        let defaultComponent = GankShowComponent;
        return (
            <Navigator
                initialRoute={{name: defaultName, component: defaultComponent}}
                configureScene={(route) => {//定义跳转的方式,禁用手势拖动跳转
                    return {...Navigator.SceneConfigs.FadeAndroid, gestures: false};
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    //路由的参数和navigator都传入到跳转的component内
                    return <Component {...route} navigator={navigator}/>
                }}/>
            //{...route} 将route的每个属性都传过去
        );
    }
}
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);