import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import MapView, {MAP_TYPES, Marker, ProviderPropType} from 'react-native-maps';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = -6.90878;
const LONGITUDE = 107.624;
const LATITUDE_DELTA = 0.0122;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class App extends React.Component {
    static navigationOptions = {
        title: 'Maps',
    };

    constructor(props) {
        super(props);

        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
        };
    }

    onRegionChange(region) {
        this.setState({region});
    }

    currentPosition() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.map.animateToRegion({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                });
            },
            () => alert("Are you sure GPS is active ?"),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={this.props.provider}
                    ref={ref => {
                        this.map = ref;
                    }}
                    mapType={MAP_TYPES.TERRAIN}
                    style={styles.map}
                    initialRegion={this.state.region}
                    loadingEnabled={true}
                    onRegionChange={region => this.onRegionChange(region)}
                >
                    <Marker
                        title="start"
                        description="start route"
                        coordinate={this.state.region}
                        draggable={true}
                    />
                </MapView>

                <View style={[styles.bubble, styles.latlng]}>
                    <Text style={{textAlign: 'center'}}>
                        {this.state.region.latitude.toPrecision(7)},
                        {this.state.region.longitude.toPrecision(7)}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => this.currentPosition()}
                        style={[styles.bubble, styles.button]}
                    >
                        <Text style={styles.buttonText}>Current Position</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.currentPosition()}
                        style={[styles.bubble, styles.button]}
                    >
                        <Text style={styles.buttonText}>Current Position</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

App.propTypes = {
    provider: ProviderPropType,
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    latlng: {
        width: 200,
        alignItems: 'stretch',
    },
    button: {
        width: 100,
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        backgroundColor: 'transparent',
    },
    buttonText: {
        textAlign: 'center',
    },
});

export default App;