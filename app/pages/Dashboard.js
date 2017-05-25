import React from 'react';
import {
  Animated,
  StyleSheet,
  View,
  ScrollView,
  Text
} from 'react-native';
import axios from 'axios';
import {
  TabViewAnimated,
  TabBar
} from 'react-native-tab-view';
import type { NavigationState } from 'react-native-tab-view/types';
import Client from '../components/Client';
import Deal from '../components/Deal';

type Route = {
  key: string,
  title: string,
};

type State = NavigationState<Route>;

class Dashboard extends React.Component {

  static navigationOptions = {
   title: 'Dashboard',
   headerStyle: {
      backgroundColor: 'white',
      shadowColor: 'white',
   },

   headerTitleStyle: {
      borderWidth: 0,
      fontWeight: '200',
   }
}

  state: State = {
    index: 0,
    routes: [
      { key: '1', title: 'Deals' },
      { key: '2', title: 'Clients' }
    ],
    clients: [],
    deals: [],
    isLoading: true,
    externalData : {
      clients: 'https://d2.flipdrive.com/djZtTz',
      deals: 'https://d2.flipdrive.com/cet0nj'
    }
  };

  first: Object;
  second: Object;

  handleChangeTab = index => {
    this.setState({
      index,
    });
  };

  handleTabItemPress = ({ route }) => {
    if (route !== this.state.routes[this.state.index]) {
      return;
    }
    switch (route.key) {
      case '1':
        if (this.first) {
          this.first.scrollTo({ y: 0 });
        }
        break;
      case '2':
        if (this.second) {
          this.second.scrollTo({ y: 0 });
        }
        break;
    }
  };

  renderLabel = props => ({ route, index }) => {
    const colorSelectedTab = '#555';
    const colorDisabledTab = 'lightgray';
    const inputRange = props.navigationState.routes.map((x, i) => i);
    const outputRange = inputRange.map(
      inputIndex => (inputIndex === index ? colorSelectedTab : colorDisabledTab),
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
        onTabPress={this.handleTabItemPress}
        renderLabel={this.renderLabel(props)}
        indicatorStyle={styles.indicator}
        tabStyle={styles.tab}
        style={styles.tabbar}
      />
    );
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
      case '1':

        if (this.state.isLoading) {
          return (
            <View style={ styles.loadingViewStyle }>
              <Text style={ styles.loadingText }>Loading...</Text>
            </View>
          );
        }
        else {
          return (
            <View style = {styles.dashboardStyles}>
              <View>
                <ScrollView>
                  {this.renderDeals()}
                </ScrollView>
              </View>
            </View>
          );
        }

      case '2':
        return (
          <View style={ styles.dashboardStyles }>
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
    axios.get(this.state.externalData.clients) //return a promise
      .then(
        response => this.setState({ clients: response.data }) // update state
      );

    axios.get(this.state.externalData.deals) //return a promise
      .then(
        response => this.setState({ deals: response.data, isLoading: false } ) // update state
      );
  }

  renderClients() {
    return this.state.clients.map(client =>
      <Client key={client.id} client={client} /> // the prop name don't have to be the same the name of the variable
    );
  }

  renderDeals() {
    return this.state.deals.map(deal =>
      <Deal key={deal.id} deal={deal} /> // the prop name don't have to be the same the name of the variable
    );
  }

  render() {
    return (
      <TabViewAnimated
        style={[styles.container, this.props.style]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this.handleChangeTab}
        lazy
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  indicator: {
    backgroundColor: '#777',
  },
  label: {
    fontSize: 13,
    margin: 4,
  },
  tabbar: {
    backgroundColor: 'white',
    shadowColor: '#777',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    marginBottom: 2,
  },
  tab: {
    opacity: 1,
    width: 90,
  },
  page: {
    backgroundColor: '#f9f9f9',
  },
  dashboardStyles: {
    backgroundColor: 'transparent'
  },
  loadingViewStyle: {
    flex: 1,
    justifyContent: 'center'
  },
  loadingText: {
    textAlign: 'center'
  }
});

export default Dashboard;
