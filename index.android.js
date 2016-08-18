import React, {
  Component
}
from 'react';
import {
  AppRegistry,
  Text,
  ActivityIndicator,
  StyleSheet,
  View,
  TextInput,
  TouchableNativeFeedback,
}
from 'react-native';

let userName;
let password;
class LoginComponet extends Component {
  render() {
    return ( < View style = {
        {
          margin: 10,
          flex: 1,
          flexDirection: 'column'
        }

      } >

      < TextInput style = {textInputStyles.basic }
      placeholderTextColor = '#757575'
      placeholder = '请输入账号' / >

      < TextInput style = {textInputStyles.basic}
      placeholderTextColor = '#757575'
      placeholder = '请输入密码' / >

      < TouchableNativeFeedback onPress = {this._onPressButton} background = {TouchableNativeFeedback.SelectableBackground()} >
      < View style = {{ borderRadius: 10, backgroundColor: '#B2EBF2'} } >
      < Text style={{margin:10,textAlign:'center'}}> 登录 < /Text> 

      < /View>     
      < /TouchableNativeFeedback>

      < /View > );
    }
  }

  class AwesomeProject extends Component {
    render() {
      return ( < LoginComponet / > );
    }
  }

  const textInputStyles = StyleSheet.create({
    basic: {
      padding: 10
    },

  });
  AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);