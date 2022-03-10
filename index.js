import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {AppRegistry} from 'react-native';
import Router from './src/Router';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';

import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/Store';
import {Provider} from 'react-redux';
import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  onNotification: notification => {
    console.log('NOTIFICATION:', notification);
    // process the notification
    // (required) Called when a remote is received or opened, or local notification is opened
  },
  popInitialNotification: true,
  requestPermissions: false,
});

PushNotification.createChannel(
  {
    channelId: '123',
    channelName: 'primary-notification',
  },
  created => console.log(`create channel created returned ${created}`),
);

const MyApps = () => (
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
