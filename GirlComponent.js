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
}
    from  'react-native'
import  PixelRatio from "react-native/Libraries/Utilities/PixelRatio";

class GirlComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: 'http://ww4.sinaimg.cn/large/610dc034jw1f9dh2ohx2vj20u011hn0r.jpg'
        }
    }

    componentWillMount() {
        fetch('http://gank.io/api/data/福利/10/1')
            .then((response)=> {
                return response.json();
            })
            .then((responseJson)=> {
                if (responseJson.results) {
                    var index = Math.ceil(Math.random() * 10 - 1);
                    this.setState({imgUrl: responseJson.results[index].url});
                }
            }).catch((error)=>console.error(error))
            .done();
    }

    render() {
        return (
            <View style={{flexDirection: 'column', flex: 1}}>
                <Image source={{uri: this.state.imgUrl}}
                       style={{width: 200 * PixelRatio.get(), height: 200 * PixelRatio.get()}}/>
            </View>
        );
    }
}

export default  GirlComponent;