import React, {Component} from 'react';
import {ActivityIndicator, View} from "react-native";

export default class App extends Component {
    static navigationOptions = {
        title: 'Activity Indicator',
    };

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <ActivityIndicator size="large" color="#0000ff"/>
                <ActivityIndicator size="small" color="#00ff00"/>
                <ActivityIndicator size="large" color="#00ff00"/>
                <ActivityIndicator size="small" color="#0000ff"/>
            </View>
        )
    }
}