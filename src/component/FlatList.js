import React, {Component, PureComponent} from 'react';
import {FlatList, RefreshControl, Text, TouchableOpacity, View} from 'react-native';

class ListItem extends PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        const textColor = this.props.selected ? "red" : "black";
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View>
                    <Text style={{color: textColor}}>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

class MultiSelectList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selected: (new Map(): Map<string, boolean>),
            refreshing: false,
        };
    }

    _onRefresh() {
        this.setState({refreshing: true});
        this.setState({refreshing: false});
    }

    _keyExtractor = (item, index) => item.id;

    _onPressItem = (id: string) => {
        // updater functions are preferred for transactional updates
        this.setState((state) => {
            // copy the map rather than modifying state.
            const selected = new Map(state.selected);
            selected.set(id, !selected.get(id)); // toggle
            return {selected};
        });
    };

    _renderItem = ({item}) => (
        <ListItem
            id={item.id}
            onPressItem={this._onPressItem}
            selected={!!this.state.selected.get(item.id)}
            title={item.title}
        />
    );

    render() {
        return (
            <FlatList
                data={this.props.data}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                    />
                }
            />

        );
    }
}

export default class App extends Component {
    static navigationOptions = {
        title: 'Flat List',
    };

    render() {
        return (
            <MultiSelectList data={[{id: 'a', title: 'Hello'}, {id: 'b', title: 'World'}]}/>
        )
    }
}