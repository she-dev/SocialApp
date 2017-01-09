import React, { Component } from 'react';
import {
  ActivityIndicator,
  PropTypes,
  Text,
  View
} from 'react-native';
import StyleVars from '../StyleVars';

class LoadingView extends Component {
  render() {
    if (this.props.backgroundColor) {
      var containerStyle = { backgroundColor: this.props.backgroundColor }
    }
    return (
      <View style={[styles.container, containerStyle]}>
        <ActivityIndicator color={StyleVars.colors.primary} />
        <Text style={styles.text}>
          {this.props.children}
        </Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "mediumBackground"
  },
  text: {
    color: StyleVars.colors.primary,
    fontFamily: StyleVars.fonts.general,
    marginTop: 12,
    textAlign: "center"
  }
};

export default LoadingView;
