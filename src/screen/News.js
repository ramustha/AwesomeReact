import React, {Component} from 'react';
import {
    ActivityIndicator,
    Image,
    ListView,
    Platform,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    View,
} from 'react-native';

class News extends Component {
    static navigationOptions = {
        title: 'News Feed',
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        return fetch('http://basenews.mybluemix.net/api/news')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson),
                }, function () {
                    // do something with new state
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    static renderRow(navigate, rowData) {
        return (
            <TouchableNativeFeedback
                onPress={() => navigate('NewsDetail', {data: rowData})}
                onLongPress={() => News.onItemLongClick(rowData)}
                background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                <View style={styles.containerItem}>
                    <Image source={{uri: rowData.media[0]}} style={{width: '100%', height: 250}}/>
                    <Text style={styles.title}>{rowData.title.trim()}</Text>
                    <Text>Source: {rowData.channelName}, {rowData.category}</Text>
                    <Text>{rowData.pubDate}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }

    static onItemLongClick(rowData) {
        console.info("onItemLongClick: " + rowData.title.trim());
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator/>
                </View>
            );
        }

        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => News.renderRow(navigate, rowData)}
                />
            </View>
        );
    }
}

export default News;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerItem: {
        flex: 1,
        padding: 10
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});