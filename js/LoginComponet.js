import React, {
    Component,
    PropTypes
} from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableNativeFeedback,
    Text,
    TouchableHighlight,
    Navigator,
    ToastAndroid
} from 'react-native'
import SplashScreen from './SplashScreen'

import GankShowComponent from './GankShowComponent'

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    check(username, password) {
        if (username.length == 0) {
            ToastAndroid.show('请填写账号', ToastAndroid.LONG)
        } else if (password.length == 0) {
            ToastAndroid.show('请填写密码', ToastAndroid.LONG);
        } else {
            if (this.props.navigator) {
                this.props.navigator.push({
                    name: 'GankShowComponent',
                    component: GankShowComponent,
                })
            }
        }
    }

    render() {
        return (
            <View style={{margin: 10, flex: 1, flexDirection: 'column'}}>
                <TextInput style={[styles.basic, {marginTop: 30}] }
                           placeholderTextColor='#757575'
                           placeholder='请输入账号'
                           onChangeText={(text) => {
                               this.setState({username: text});
                           }}/>
                <TextInput style={styles.basic}
                           placeholderTextColor='#757575'
                           placeholder='请输入密码'
                           onChangeText={(text) => {
                               this.setState({password: text});
                           }}/>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.SelectableBackground()}
                    onPress={() => this.check(this.state.username, this.state.password)}
                >
                    <View style={{borderRadius: 10, backgroundColor: '#0097A7', marginTop: 30}}>
                        <Text style={styles.text}>登录</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

/**
 * 样式封装
 */
const styles = StyleSheet.create({
    basic: {
        padding: 10
    },
    text: {
        fontSize: 18,
        color: '#FFFFFF',
        margin: 10,
        textAlign: 'center'
    }
});

export default  LoginComponent;