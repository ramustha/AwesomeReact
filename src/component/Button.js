import React, {Component} from 'react';
import {Alert, Button, ScrollView, View} from 'react-native';

export default class App extends Component {
    static navigationOptions = {
        title: 'Button',
    };

    static onClickButton() {
        return Alert.alert("Clicked");
    }

    render() {
        return (
            <ScrollView>
                <View
                    style={{flex: 1, padding: 5}}>
                    <Button
                        onPress={() => App.onClickButton()}
                        title="Learn More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
                <View
                    style={{flex: 1, padding: 5}}>
                    <Button
                        onPress={() => App.onClickButton()}
                        title="Disabled"
                        color="#841584"
                        accessibilityLabel="Disabled"
                        disabled={true}
                    />
                </View>
            </ScrollView>

        )
    }
}