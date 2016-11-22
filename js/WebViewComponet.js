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
    Text,
    ActivityIndicator
} from 'react-native';


class WebViewComponent extends Component {

    render() {
        return (
            <View style={{flexDirection: 'column', flex: 1}}>
                <View style={{flexDirection: 'row', backgroundColor: '#00BCD4', padding: 10}}>
                    <TouchableWithoutFeedback onPress={() => this.goBack()}>
                        <Image style={{width: 30, height: 30}} source={require('./../image/icon_back.png') }/>
                    </TouchableWithoutFeedback>
                    <Text style={{fontSize: 20, color: "#FFFFFF"}}>安卓干货</Text>
                </View>
                <WebView
                    renderLoading={() => {//加载视图
                        return (
                            <View
                                style={ {
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <ActivityIndicator size='large' color='#00BCD4'/>
                            </View>
                        );
                    }}
                    scalesPageToFit={true}
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
export  default  WebViewComponent;