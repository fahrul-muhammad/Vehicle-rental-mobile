import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './screens/Login';
import Signup from './screens/signup';

const Stack = createStackNavigator();

const Router = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={Signup} />
  </Stack.Navigator>
);

export default Router;
