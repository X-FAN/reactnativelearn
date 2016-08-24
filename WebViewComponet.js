/**
 * Created by TC on 2016/8/24.
 */
import React, {
    Component,
} from 'react';
import {
    View,
    WebView,
    ToastAndroid,
    TouchableWithoutFeedback,
    Image,
    Text
} from 'react-native';


class WebViewComponet extends Component {

    render() {
        return (
            <View style={{flexDirection: 'column', flex: 1}}>
                <View style={{flexDirection: 'row', backgroundColor: '#00BCD4', padding: 10}}>
                    <TouchableWithoutFeedback onPress={()=>this.goBack()}>
                        <Image style={{width: 30, height: 30}} source={require('./image/back.png') }/>
                    </TouchableWithoutFeedback>
                    <Text style={{fontSize: 20, color: "#FFFFFF"}}>安卓干货</Text>
                </View>
                <WebView
                    startInLoadingState={true}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: this.props.url}}/>
            </View>
        );
    };

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
}
export  default  WebViewComponet;