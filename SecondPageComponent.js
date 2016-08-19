import  React, {
    Component
} from 'react'
import {
    View,
    Text
} from  'react-native'

class SecondPageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 20}}>第二个页面</Text>
            </View>
        );
    }
}

export  default SecondPageComponent;

