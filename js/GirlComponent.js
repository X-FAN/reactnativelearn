/**
 * Created by TC on 2016/10/10.
 */
import  React, {
    Component,

} from 'react'

import {
    Image,
    View,
    ToastAndroid,
    ActivityIndicator,
}
    from  'react-native'
import  PixelRatio from "react-native/Libraries/Utilities/PixelRatio";
class GirlComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: ''
        }
    }

    loadImage() {
        this.setState({imgUrl: ''});
        this.getImage();
    }


    componentWillMount() {
        this.getImage();
    }

    getImage() {
        yield fetch('http://gank.io/api/data/福利/100/1')//异步请求图片
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                if (responseJson.results) {
                    const index = Math.ceil(Math.random() * 100 - 1);//随机取一张福利图
                    this.setState({imgUrl: responseJson.results[index].url});
                }
            }).catch((error) => console.error(error))
            .done();
    }

    render() {

        if (this.state.imgUrl.length == 0) {
            return (
                <View style={ {flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size='large' color='#00BCD4'/>
                </View>
            );
        } else {
            return (
                <View style={{flexDirection: 'column', flex: 1}}>
                    <Image source={{uri: this.state.imgUrl}}
                           style={{width: 200 * PixelRatio.get(), height: 200 * PixelRatio.get()}}/>
                </View>
            );
        }


    }
}

export default  GirlComponent;