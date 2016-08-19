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
    ToastAndroid,
    TouchableHighlight,
    Navigator
} from 'react-native'

import SecondPageComponent from './SecondPageComponent'

class LoginComponet extends Component {
    check(username, password) {
        if (username.length == 0) {
            ToastAndroid.show('请填写账号', ToastAndroid.LONG)
        } else if (password.length == 0) {
            ToastAndroid.show('请填写密码', ToastAndroid.LONG);
        } else {
            this.props.navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent,
            })
        }
    }

    render() {
        let username = '';
        let password = '';
        return (
            <View style={{margin: 10, flex: 1, flexDirection: 'column'}}>
                <TextInput style={textInputStyles.basic}
                           placeholderTextColor='#757575'
                           placeholder='请输入账号'
                           onChangeText={(text)=> {
                               username = text
                           }}/>
                <TextInput style={textInputStyles.basic}
                           placeholderTextColor='#757575'
                           placeholder='请输入密码'
                           onChangeText={(text)=> {
                               password = text
                           }}/>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.SelectableBackground()}
                    onPress={()=>this.check(username, password)}
                >
                    <View style={{borderRadius: 10, backgroundColor: '#B2EBF2'}}>
                        <Text style={{margin: 10, textAlign: 'center'}}>登录</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const textInputStyles = StyleSheet.create({
    basic: {
        padding: 10
    },
});

export default  LoginComponet;