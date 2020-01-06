import React from 'react';
import Main from './src/pages/Main/index';
import CurrencyList from './src/pages/CurrencyList/index';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar translucent={false} barStyle="light-content" />
      <CurrencyList />
    </>
  );
};


export default App;
