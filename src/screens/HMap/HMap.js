import React from 'react';
import openMap from 'react-native-open-maps';
import{
    View,
    StyleSheet,
    Text,
    Image

}from 'react-native';
import COLORS from '../../consts/colors';


/*export default function Map(){*/

const HMap = () => {


    return(
        <View style={styles.body}>
        <Text style={styles.text}> 
           2D MAP
         </Text>
         <Image 
                          style={styles.startImgStyle}

            source={{uri:'https://github.com/VINURIRODRIGO/Techpulse/blob/oldMain/data/images/img18.png?raw=true'}}
          />

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
      marginTop: 50,
      color: COLORS.blue,
      fontWeight: "bold"
  },
  startImgStyle:{
    width: 400,
    height: 400,
    top: 40,
    resizeMode: 'cover',
  },
});

export default HMap;
