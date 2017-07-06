/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import axios from 'axios'
import { Home, People, AddPeople } from './components'
import { AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

export const Tabs = TabNavigator({
  People: { screen: People },
  AddPeople: { screen: AddPeople },
});

Tabs.navigationOptions = {
  title: 'Star Wars People',
};

const App = StackNavigator({
  Home: { screen: Home },
  People: {screen: Tabs}
});

AppRegistry.registerComponent('basic', () => App);
