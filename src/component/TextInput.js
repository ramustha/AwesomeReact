import React, {Component} from 'react';
import {TextInput} from 'react-native';

export default class App extends Component {
    static navigationOptions = {
        title: 'Text Input',
    };

    constructor(props) {
        super(props);
        this.state = {text: 'Useless Placeholder'};
    }

    render() {
        return (
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                multiline = {true}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />
        );
    }
}