/*
  Import libraries for making a component
  Make a component
  Make the component available to other parts of the app
*/

import React from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import Client from '../components/Client';

class Dashboard extends React.Component {

  state = { clients: [] } // init the state

  componentWillMount() { // automatic call as soon as this component is render in the screen fantastic place to load some data
    axios.get('https://d2.flipdrive.com/hoXA1') //return a promise
      .then(
        response => this.setState({ clients: response.data}) // update state
      );
  }

  renderClients() {
    return this.state.clients.map(client =>
      <Client key={client.id} client={client} /> // the prop name don't have to be the same the name of the variable
    );
  }

  static navigationOptions = {
    title: 'Dashboard',
  };

  render() {

    console.log(this.state);

    return ( // expect to be scrollable
      <ScrollView style={{backgroundColor: 'white'}}>
        {this.renderClients()}
      </ScrollView>
    );
  }
}

export default Dashboard;
