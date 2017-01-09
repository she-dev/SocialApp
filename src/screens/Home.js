import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from '../views/Button';
import LoadingView from '../views/LoadingView';
import SharedStyles from '../SharedStyles';
import StyleVars from '../StyleVars';

class Home extends Component {
  constructor(props) {
    super(props);
    console.log('super props ', props);
    this.state = {
      loaded: false,
      failed: true
    }
  }

  render() {
    const { buttonContainer, buttonStyle, reloadText } = styles;

    if (this.state.failed) {
      return (
        <View style={[SharedStyles.screenContainer, buttonContainer]}>
          <Text style={[SharedStyles.headingText, reloadText]}>
            Couldn't fetch posts.
          </Text>
          <Button
            onPress={() => this._retryFetch()}
            style={buttonStyle}
            >
              Retry now
            </Button>
          </View>
        );
    } else if (this.state.loaded) {
      return (
        <View style={SharedStyles.screenContainer} />
      );
    } else {
      return (
        <LoadingView backgroundColor={StyleVars.colors.mediumBackground}>
          Loading...
        </LoadingView>
      );
    }
  }

  _retryFetch() {
    // TODO: initiate another fetch from the server
  }



}

const styles = {
  buttonContainer: {
    paddingTop: 96,
    alignItems: "center"
  },
  buttonStyle: {
    width: 256
  },
  reloadText: {
    marginVertical: 20,
    textAlign: "center"
  }
};

export default Home;
