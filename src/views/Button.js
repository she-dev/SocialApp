import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import StyleVars from '../StyleVars';

class Button extends Component {
  onPress() {
    if (this.props.enabled) {
      this.props.onPress();
    }
  }

  render() {
    const { buttonStyle, buttonText } = styles;
    let textStyle = [buttonText, this.props.textStyle];
    return (
      <TouchableOpacity
        activeOpacity={this.props.activeOpacity}
        onPress={() => this.onPress()}
        style={buttonStyle}
      >
        <Text style={textStyle}>
          {this.props.children}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = {
  buttonStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    paddingVertical: 9,
    paddingHorizontal: 15,
    overflow: "hidden",
    backgroundColor: StyleVars.colors.primary,
  },
  buttonText: {
    color: "white",
    fontFamily: StyleVars.fonts.general,
    fontSize: 14,
    fontWeight: "400"
  }
};

export default Button;
