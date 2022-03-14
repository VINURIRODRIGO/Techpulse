import React from 'react';
import{
    View,
    StyleSheet,
    Text,

}from 'react-native';
import COLORS from '../../consts/colors';


/*export default function Map(){*/

const HMap = () => {


    return(
        <View style={styles.body}>
        <Text style={styles.text}> 
           2D MAP
         </Text>


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
});

export default HMap;
