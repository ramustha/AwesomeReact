import React from "react";
import {StackNavigator} from 'react-navigation';
import Main from './src/screen/Main'
import ActivityIndicator from './src/component/ActivityIndicator'
import Button from './src/component/Button'
import DrawerLayout from './src/component/DrawerLayout'
import FlatList from './src/component/FlatList'
import Image from './src/component/Image'
import Modal from './src/component/Modal'
import Picker from './src/component/Picker'
import TextInput from './src/component/TextInput'
import Toolbar from './src/component/Toolbar'
import ViewPager from './src/component/ViewPager'
import WebView from './src/component/WebView'

const App = StackNavigator({
    MainScreen: {screen: Main},
    ActivityIndicator: {screen: ActivityIndicator},
    Button: {screen: Button},
    DrawerLayout: {screen: DrawerLayout},
    FlatList: {screen: FlatList},
    Image: {screen: Image},
    Modal: {screen: Modal},
    Picker: {screen: Picker},
    TextInput: {screen: TextInput},
    Toolbar: {screen: Toolbar},
    ViewPager: {screen: ViewPager},
    WebView: {screen: WebView},
});
export default App;