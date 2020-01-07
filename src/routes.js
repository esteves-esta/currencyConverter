import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main/index';
import CurrencyList from './pages/CurrencyList/index';
import Option from './pages/Option/index';
import Themes from './pages/Themes/index';

const optionStack = createStackNavigator({
  Home: {
    screen: Main,
    navigationOptions: {
      headerShown: false,
    }
  },
  Options: {
    screen: Option,
  },
  Themes: {
    screen: Themes,
  }
});

const MainStack = createStackNavigator({
  HomeStack: {
    screen: optionStack,
    navigationOptions: {
      headerShown: false,
    }
  },
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
});

export default createAppContainer(MainStack);

