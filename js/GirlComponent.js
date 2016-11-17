/**
 * Created by TC on 2016/10/10.
 */
import  React, {
    Component,

} from 'react'

import {ActivityIndicator} from 'react-native'


import {
    Image,
    View,
    ToastAndroid,
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

    componentWillMount() {
        fetch('http://gank.io/api/data/福利/100/1')
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                if (responseJson.results) {
                    var index = Math.ceil(Math.random() * 100 - 1);
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