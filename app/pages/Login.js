/*
  Import libraries for making a component
  Make a component
  Make the component available to other parts of the app
*/

import React from 'react';
import { View } from 'react-native';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';

class Login extends React.Component {
  static navigationOptions = {
    title: 'ROM',
  };
  render() {
    const { navigate } = this.props.navigation;

    const {
      loginStyles,
      boxStyle,
      fieldStyle,
      loginButtonStyle
    } = styles;

    return (
      <View style={ loginStyles }>
        <View style={ boxStyle }>
          <View style={ fieldStyle }>
            <Input
              label= "Username: "
              placeholder = "username"
            />
            <Input
              label= "Password: "
              placeholder = "password"
            />
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
  boxStyle: {
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    margin: 10,
  },
  loginButtonStyle: {
    height: 60
  },
  fieldStyle: {
    marginBottom: 20,
    marginTop: 20
  }
};

export default Login;
