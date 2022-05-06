import openMap from 'react-native-open-maps';
import React, { Component } from 'react';
import{
  View,
  StyleSheet,
  Text,
}from 'react-native';
import { Button } from 'react-native';

export default class App extends Component {
  _goToLoc() {
    openMap({ latitude: 6.8496, longitude: 79.8775 });
  }

  render() {

    return (

      <View style={style.btnView}>

      <Button

        onPress={this._goToLoc}
        title="Click To Open Google Maps" />

      </View>

    );

  }

}



const style = StyleSheet.create({

  btnView: {
    height: 35,
    width: 265,
    fontSize: 30,
    marginHorizontal: 15,
    marginVertical: 50,
    borderRadius: 8,
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    left: 70,
    top: 320,
  },

});
