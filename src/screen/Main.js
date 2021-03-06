import React, {Component} from "react";
import {Button, ScrollView, View} from "react-native";
import StaticMap from "../maps/StaticMap";

export default class Main extends Component {
    static navigationOptions = {
        title: 'Main',
    };

    render() {

        const navigator = this.props.navigation;

        return (
            <ScrollView>
                <View
                    style={{flex: 1, padding: 5}}>
                    <Button
                        onPress={(() => Main.onPressButton(navigator, 'News'))}
                        title="News"
                        accessibilityLabel="News"
                    />

                </View>
                <View
                    style={{flex: 1, padding: 5}}>
                    <Button
                        onPress={(() => Main.onPressButton(navigator, 'ActivityIndicator'))}
                        title="Activity indicator"
                        accessibilityLabel="Activity indicator"
                    />

                </View>
                <View
                    style={{flex: 1, padding: 5}}>
                    <Button
                        onPress={(() => Main.onPressButton(navigator, 'Button'))}
                        title="Button"
                        accessibilityLabel="Button"
                    />
                </View>
                <View
                    style={{flex: 1, padding: 5}}>
                    <Button
                        onPress={(() => Main.onPressButton(navigator, 'DrawerLayout'))}
                        title="Drawer Layout Android"
                        accessibilityLabel="Drawer Layout Android"
                    />
                </View>
                <View
                    style={{flex: 1, padding: 5}}>
                    <Button
                        onPress={(() => Main.onPressButton(navigator, 'FlatList'))}
                        title="FlatList"
                        accessibilityLabel="FlatList"
                    />
                </View>
                <View
                    style={{flex: 1, padding: 5}}>
                    <Button
                        onPress={(() => Main.onPressButton(navigator, 'Image'))}
                        title="Image"
                        accessibilityLabel="Image"
                    />
                </View>
                <View
                    style={{flex: 1, padding: 5}}>
                    <Button
                        onPress={(() => Main.onPressButton(navigator, 'Modal'))}
                        title="Modal"
                        accessibilityLabel="Modal"
                    />
                </View>
                <View
                    style={{flex: 1, padding: 5}}>
                    <Button
                        onPress={(() => Main.onPressButton(navigator, 'Picker'))}
                        title="Picker"
                        accessibilityLabel="Picker"
                    />
                </View>
                <View
                    style={{flex: 1, padding: 5}}>
                    <Button
                        onPress={(() => Main.onPressButton(navigator, 'TextInput'))}
                        title="Text Input"
                        accessibilityLabel="Text Input"
                    />
                </View>
                <View
                    style={{flex: 1, padding: 5}}>
                    <Button
                        onPress={(() => Main.onPressButton(navigator, 'Toolbar'))}
                        title="Toolbar"
                        accessibilityLabel="Toolbar"
                    />
                </View>
                <View
                    style={{flex: 1, padding: 5}}>
                    <Button
                        onPress={(() => Main.onPressButton(navigator, 'ViewPager'))}
                        title="ViewPager"
                        accessibilityLabel="ViewPager"
                    />
                </View>
                <View
                    style={{flex: 1, padding: 5}}>
                    <Button
                        onPress={(() => Main.onPressButton(navigator, 'WebView'))}
                        title="WebView"
                        accessibilityLabel="WebView"
                    />
                </View>
                <View
                    style={{flex: 1, padding: 5}}>
                    <Button
                        onPress={(() => Main.onPressButton(navigator, 'StaticMap'))}
                        title="StaticMap"
                        accessibilityLabel="StaticMap"
                    />
                </View>
            </ScrollView>
        )
    }

    static onPressButton(navigator, tags) {
        navigator.navigate(tags, {title: tags})
    }
}
