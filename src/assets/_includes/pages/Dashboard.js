/*
  Import libraries for making a component
  Make a component
  Make the component available to other parts of the app
*/

import React from 'react';
import { View, Text } from 'react-native';
import { CardSection } from '../components/common';

class Dashboard extends React.Component {
  static navigationOptions = {
    title: 'Dashboard',
  };
  render() {
    return (
      <View>
        <CardSection>
          <Text>Dashboard</Text>
        </CardSection>
      </View>
    );
  }
}

export default Dashboard;
