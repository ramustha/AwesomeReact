import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";

class NewsDetail extends Component {
    static navigationOptions = {
        title: 'Detail News',
    };

    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.navigation.state.params.data;
        return (
            <ScrollView>
                <View style={styles.containerItem}>
                    <Image source={{uri: data.media[0]}} style={{width: '100%', height: 250}}/>
                    <Text style={styles.title}>{data.title.trim()}</Text>
                    <Text>Source: {data.channelName}, {data.category}</Text>
                    <Text>{data.pubDate}</Text>
                    <Text style={styles.content}>{data.fullContent}</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    containerItem: {
        flex: 1,
        padding: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    content: {
        paddingTop: 12
    },
});

export default NewsDetail;