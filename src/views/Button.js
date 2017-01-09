import React, { Component, PropTypes } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
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

Button.propTypes = {
  onPress: PropTypes.func,
  style: View.propTypes.style,
  textStyle: View.propTypes.style,
  activeOpacity: PropTypes.number,
  enabled: PropTypes.bool,
  children: PropTypes.string
}

Button.defaultProps = {
  onPress: () => {},
  style: {},
  textStyle: {},
  activeOpacity: 0.8,
  enabled: true
}

export default Button;
