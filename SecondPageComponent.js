import  React, {
    Component
} from 'react'
import {
    View,
    Text,
    ListView
} from  'react-native'

class SecondPageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        };
    }

    componentWillMount() {
        this.genRows();
    }

    render() {
        if (this.state.dataSource.getRowCount() === 0) {
            return (
                <View >
                    <Text>
                        加载中....
                    </Text>
                </View>
            );
        } else {
            return (
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =><Text>{rowData.desc}</Text>
                    }>
                </ListView>
            );
        }

    }

    genRows() {
        this.getAndroidGank();
    }

    getAndroidGank() {
        fetch("http://gank.io/api/day/2015/08/06")
            .then((response)=>response.json)
            .then((responseJson)=> {
                if (responseJson.results) {
                    this.setState({dataSource: responseJson.results});
                }
            }).catch((error)=>console.error(error));
    }
}

export  default SecondPageComponent;

