import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthScreen from "../screens/AuthScreen";

const AuthStack = createStackNavigator({ SignIn: AuthScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      App: MainTabNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Auth',
    }
  )
);
