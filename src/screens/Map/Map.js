import openMap from 'react-native-open-maps';
import React, { Component } from 'react';
import { Button } from 'react-native';

export default class App extends Component {
  _goToYosemite() {
    openMap({ latitude: 6.8496, longitude: 79.8775 });
  }

  render() {
    return (
      <Button
        color={'#bdc3c7'}
        onPress={this._goToYosemite}
        title="Click To Open Maps 🗺" />
    );
  }
}

