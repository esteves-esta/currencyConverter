import React from 'react';
import Main from './src/pages/Main/index';
import { StatusBar } from 'react-native';
const App = () => {
  return (
    <>
      <StatusBar translucent={false} barStyle="light-content" />
      <Main />
    </>
  );
};


export default App;
