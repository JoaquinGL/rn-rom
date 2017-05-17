/*
  Import libraries for making a component
  Make a component
  Make the component available to other parts of the app
*/

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  Login: { screen: Login },
  Dashboard: { screen: Dashboard }
});


export default App;
