import React, {Component} from 'react';
import {Text, View, ViewPagerAndroid} from 'react-native';

export default class App extends Component {
    static navigationOptions = {
        title: 'ViewPager',
    };

    render() {
        return (
            <ViewPagerAndroid
                style={styles.viewPager}
                initialPage={0}>
                <View style={styles.pageStyle} key="1">
                    <Text>First page</Text>
                </View>
                <View style={styles.pageStyle} key="2">
                    <Text>Second page</Text>
                </View>
            </ViewPagerAndroid>
        );
    }
}

const styles = {
    viewPager: {
        flex: 1
    },
    pageStyle: {
        alignItems: 'center',
        padding: 20,
    }
}