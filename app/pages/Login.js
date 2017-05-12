/*
  Import libraries for making a component
  Make a component
  Make the component available to other parts of the app
*/

import React from 'react';
import { View, Text } from 'react-native';
import { Button, CardSection } from '../components/common';

class Login extends React.Component {
  static navigationOptions = {
    title: 'ROM',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <CardSection>
          <Text>Username</Text>
        </CardSection>
        <CardSection>
          <Text>Password</Text>
        </CardSection>
        <CardSection>
          <Button onPress={() => navigate('Dashboard')}>
            LOGIN IN
          </Button>
        </CardSection>
      </View>
    );
  }
}

export default Login;
