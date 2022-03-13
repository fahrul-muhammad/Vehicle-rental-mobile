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
import {sendLocalNotification} from './src/module/notification';

PushNotification.configure({
  // onRegister: function (token) {
  //   console.log('TOKEN:', token);
  // },
  onRegistrationError: function (err) {
    console.error('ERROR:', err.message, err);
  },
  onNotification: notification => {
    console.log('NOTIFICATION:', notification);
    sendLocalNotification({
      title: notification.title,
      message: notification.message,
    });
  },
  popInitialNotification: true,
  requestPermissions: true,
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
