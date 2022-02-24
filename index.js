import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import Router from './src/Router';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';

import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/Store';
import {Provider} from 'react-redux';

const MyApps = () => (
  // <Provider store={store}>
  //   <PersistGate persistor={persistor}>
  //   </PersistGate>
  // </Provider>
  <>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  </>
);

AppRegistry.registerComponent(appName, () => MyApps);
