/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';

// Redux
import {Provider} from 'react-redux';

// Store
import store from './src/states';

// Navigation
import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <AppNavigation />
    </Provider>
  );
};

export default App;
