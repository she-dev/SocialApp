import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import RootNavigator from './src/views/RootNavigator';

const styles = {
  containerStyle: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  }
};

export default class SocialApp extends Component {
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <RootNavigator ref="rootNavigator" />
      </View>
    );
  }
}

AppRegistry.registerComponent('SocialApp', () => SocialApp);
