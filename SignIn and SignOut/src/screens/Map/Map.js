import React from 'react';
import{
    View,
    StyleSheet,
    Text,

}from 'react-native';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../../consts/colors';
import houses from '../../consts/houses';
import MapView, {Marker} from 'react-native-maps';

/*export default function Map(){*/

const Map = () => {

/*    const {houses} = route.params;*/

    const navigation = useNavigation();


    return(
        <View style={styles.body}>
        <Text style={styles.text}> 
           {/*{houses}*/}
           MAP
         </Text>

         <MapView style={styles.map}
            initialRegion={{
            latitude: 6.8496,
            longitude: 79.8775,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
        >
        <Marker
            coordinate={{
                latitude: 6.8496,
                longitude: 79.8775
            }}
            title="Keels"
            description="des"
            />
        </MapView>

        </View>
    );

}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        margin: 10,
    },
    map: {
        width: '100%',
        height: '100%'
    }
});

export default Map;
