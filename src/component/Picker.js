import React, {Component} from 'react';
import {Picker} from 'react-native';

export default class App extends Component {
    static navigationOptions = {
        title: 'Picker',
    };

    state = {
        language: ''
    };

    render() {
        return (
            <Picker
                selectedValue={this.state.language}
                onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                <Picker.Item label="Java" value="java"/>
                <Picker.Item label="JavaScript" value="js"/>
            </Picker>
        );
    }
}