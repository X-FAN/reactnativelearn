import React, {
    Component
}
    from 'react';
import {
    AppRegistry,
    Navigator
}
    from 'react-native';

import LoginComponet from './LoginComponet'

class AwesomeProject extends Component {
    render() {
        let defaultName = 'LoginComponet';
        let defaultComponent = LoginComponet;
        return (
            <Navigator
                initialRoute={{name: defaultName, component: defaultComponent}}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.HorizontalSwipeJump;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>
                }}/>
        );
    }
}
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);