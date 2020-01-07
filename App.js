import React from 'react';
import 'react-native-gesture-handler';
import Routes from './src/routes';
import { Provider } from 'react-redux';
import store from './src/store/index';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar translucent={false} barStyle="light-content" />
      <Routes />
    </Provider>
  );
};


export default App;
