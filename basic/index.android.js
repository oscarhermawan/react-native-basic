/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import axios from 'axios'

import { Provider } from 'react-redux'
import { Home, People, AddPeople } from './components'
import { AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import store from './store/configureStore'

export const Tabs = TabNavigator({
  People: { screen: People },
  AddPeople: { screen: AddPeople },
});

Tabs.navigationOptions = {
  title: 'Star Wars People',
};

const NavigatorHome = StackNavigator({
  Home: { screen: Home },
  People: {screen: Tabs}
});

class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <NavigatorHome />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('basic', () => App);
