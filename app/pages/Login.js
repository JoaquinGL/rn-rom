/*
  Import libraries for making a component
  Make a component
  Make the component available to other parts of the app
*/

import React from 'react';
import { View, Text } from 'react-native';
import { Button, Card, CardSection } from '../components/common';

class Login extends React.Component {
  static navigationOptions = {
    title: 'ROM',
  };
  render() {
    const { navigate } = this.props.navigation;

    const {
      loginStyles,
      cardStyle,
      fieldsetStyle,
      labelStyle,
      loginButtonStyle
    } = styles;

    return (
      <View style={ loginStyles }>
        <View style={ cardStyle }>
          <View style={ fieldsetStyle }>
            <Text style={ labelStyle }>Username: </Text>
            <Text style={ labelStyle }> Password: </Text>
          </View>
          <View style={ loginButtonStyle }>
            <Button onPress={() => navigate('Dashboard')}>
              LOGIN IN
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  loginStyles: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  cardStyle: {
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    margin: 10,
  },
  fieldsetStyle: {
    padding: 10,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    marginBottom: 10,
    marginTop: 20
  },
  loginButtonStyle: {
    height: 60
  },
  labelStyle: {
    marginBottom: 10,
  }
};

export default Login;
