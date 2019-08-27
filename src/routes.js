import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import SignIn from './pages/SignIn';

import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import SelectProvider from '~/pages/New/SelectProvider';
import Confirm from '~/pages/New/Confirm';
import SelectDataTime from '~/pages/New/SelectDataTime';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            new: {
              screen: createStackNavigator(
                {
                  SelectProvider,
                  SelectDataTime,
                  Confirm,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                },
              ),
              navigationOptions: {
                tabBarLabel: 'Agendar',
                tabBarVisible: false,
                tabBarIcon: (
                  <Icon
                    name="add-circle-outline"
                    size={20}
                    color="rgba(255,255,255,0.6)"
                  />
                ),
              },
            },
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255,255,255,0.6)',
              style: {backgroundColor: '#8d41a8'},
            },
          },
        ),
      },
      {initialRouteName: isSigned ? 'App' : 'Sign'},
    ),
  );
