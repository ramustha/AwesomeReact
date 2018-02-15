import React, {Component} from 'react';
import {ToolbarAndroid} from 'react-native';

export default class App extends Component {
    static navigationOptions = {
        title: 'Toolbar',
    };

    render() {
        return (
            <ToolbarAndroid
             /*   logo={require('./app_logo.png')}*/
                title="AwesomeApp"
                actions={[{title: 'Settings', /*icon: require('./icon_settings.png'),*/ show: 'always'}]}
                onActionSelected={this.onActionSelected} />
        );
    }
}