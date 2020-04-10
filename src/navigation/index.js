import * as React from 'react';
import {Colour} from '../components/styles';
import {
  createAppContainer,
  createSwitchNavigator,
  NavigationRoute,
  NavigationScreenProp,
} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {creaHomeackNavigator} from 'react-navigation-stack';
import {Routes, TabIcons} from './routes';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import withSafeAreaView from '../components/withSafeAreaView';

const getTabIcon = (iconProps, routeName) => {
  const {tintColor} = iconProps;
  const iconName = TabIcons[routeName];
  return (
    <Icon
      name={iconName}
      color={tintColor || Colour.primary}
      size={30}
      style={{height: 34}}
    />
  );
};

const AuthStack = createStackNavigator(
  {
    [Routes.GetStarted]: GetStarted,
  },
  {
    headerMode: 'none',
    initialRouteName: Routes.GetStarted,
  },
);

const AppStack = createBottomTabNavigator(
  {
    [Routes.HOME]: withSafeAreaView(Home),
    [Routes.Explore]: withSafeAreaView(Home),
    [Routes.Notifications]: Home,
    [Routes.Profile]: Home,
  },
  {
    defaultNavigationOptions: ({
      navigation,
    }: {
      navigation,
    }) => {
      const {routeName} = navigation.state;
      return {
        tabBarIcon: (iconProps) =>
          getTabIcon(iconProps, routeName),
      };
    },
    initialRouteName: Routes.HOME,
    tabBarOptions: {
      activeTintColor: Colour.primary,
      inactiveTintColor: Colour.textColor,
      keyboardHidesTabBar: true,
      labelStyle: styles.label,
      showIcon: true,
      style: styles.tab,
    },
  },
);

const Navigation = createSwitchNavigator(
  {
    [Routes.AppStack]: AppStack,
    [Routes.AuthStack]: AuthStack,
  },
  {initialRouteName: Routes.AuthStack},
);

export default createAppContainer(Navigation);

