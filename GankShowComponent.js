/**
 * Created by TC on 2016/9/7.
 */
import  React, {
    Component,

} from 'react'
import ScrollableTabView  from 'react-native-scrollable-tab-view'
import GankComponent from './GankComponent'

class GankShowComponent extends Component {
    render() {
        return (
            <ScrollableTabView tabBarUnderlineStyle={{backgroundColor: '#0097A7'}} tabBarActiveTextColor='#0097A7'>
                <GankComponent navigator={this.props.navigator} url='http://gank.io/api/data/all/10/1' tabLabel='ALL'/>
                <GankComponent navigator={this.props.navigator} url='http://gank.io/api/data/Android/10/1'
                               tabLabel='ANDROID'/>
                <GankComponent navigator={this.props.navigator} url='http://gank.io/api/data/iOS/10/1' tabLabel='IOS'/>
            </ScrollableTabView>
        );

    }
}

export default  GankShowComponent;