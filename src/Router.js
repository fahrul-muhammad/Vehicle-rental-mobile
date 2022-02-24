import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './screens/Login';
import Signup from './screens/signup';
import Forgot_Password from './screens/ForgotPassword';

const Stack = createStackNavigator();

const Router = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={Signup} />
    <Stack.Screen name="forgot_password" component={Forgot_Password} />
  </Stack.Navigator>
);

export default Router;
