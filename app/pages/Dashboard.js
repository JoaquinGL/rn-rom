import React, { PureComponent } from 'react';
import { Animated, StyleSheet, View, ScrollView } from 'react-native';
import axios from 'axios';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import type { NavigationState } from 'react-native-tab-view/types';
import Client from '../components/Client';

type Route = {
  key: string,
  title: string,
};

type State = NavigationState<Route>;

export default class TopBarTextExample extends PureComponent<void, *, State> {
  static title = 'Scroll views with lazy load';
  static backgroundColor = '#fff';
  static tintColor = '#222';
  static appbarElevation = 0;

  static navigationOptions = {
    title: 'Dashboard',
  };

  state: State = {
    index: 0,
    routes: [
      { key: '1', title: 'Deals' },
      { key: '2', title: 'Clients' }
    ],
  };

  _first: Object;
  _second: Object;

  _handleChangeTab = index => {
    this.setState({
      index,
    });
  };

  _handleTabItemPress = ({ route }) => {
    if (route !== this.state.routes[this.state.index]) {
      return;
    }
    switch (route.key) {
      case '1':
        if (this._first) {
          this._first.scrollTo({ y: 0 });
        }
        break;
      case '2':
        if (this._second) {
          this._second.scrollTo({ y: 0 });
        }
        break;
    }
  };

  _renderLabel = props => ({ route, index }) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    const outputRange = inputRange.map(
      inputIndex => (inputIndex === index ? '#D6356C' : '#222'),
    );
    const color = props.position.interpolate({
      inputRange,
      outputRange,
    });

    return (
      <Animated.Text style={[styles.label, { color }]}>
        {route.title}
      </Animated.Text>
    );
  };

  _renderHeader = props => {
    return (
      <TabBar
        {...props}
        pressColor="rgba(255, 64, 129, .5)"
        onTabPress={this._handleTabItemPress}
        renderLabel={this._renderLabel(props)}
        indicatorStyle={styles.indicator}
        tabStyle={styles.tab}
        style={styles.tabbar}
      />
    );
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return (
          <View style={[ styles.container, { backgroundColor: '#ff4081' } ]} />
        );
      case '2':
        return (
          <View style = {styles.DashboardStyles}>
            <View>
              <ScrollView>
                {this.renderClients()}
              </ScrollView>
            </View>
          </View>
        );
      default:
        return null;
    }
  };


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

  render() {
    return (
      <TabViewAnimated
        style={[styles.container, this.props.style]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
        lazy
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicator: {
    backgroundColor: '#ff4081',
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    margin: 8,
  },
  tabbar: {
    backgroundColor: '#fff',
  },
  tab: {
    opacity: 1,
    width: 90,
  },
  page: {
    backgroundColor: '#f9f9f9',
  },
  DashboardStyles: {
    backgroundColor: 'white'
  }
});
