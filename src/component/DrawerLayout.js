import React, {Component} from 'react';
import {DrawerLayoutAndroid, Text, View} from 'react-native';

export default class App extends Component {
    static navigationOptions = {
        title: 'Drawer Layout Android',
    };

    componentDidMount(){
        this.refs['thisDrawer'].openDrawer();
    }

    render() {
        let navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
                    Im in the Drawer 1!
                </Text>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
                    Im in the Drawer 2!
                </Text>
            </View>
        );

        return (
            <DrawerLayoutAndroid
                ref="thisDrawer"
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Right}
                renderNavigationView={() => navigationView}
            >
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World</Text>
                </View>

            </DrawerLayoutAndroid>
        )
    }
}