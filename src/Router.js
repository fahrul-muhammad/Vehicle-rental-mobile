import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';

import Login from './screens/Login';
import Signup from './screens/signup';
import Forgot_Password from './screens/ForgotPassword';
import Home from './screens/home';
import Profile from './screens/profile';
import Search from './screens/search';
import Chat from './screens/Chat';
import Category from './screens/VehicleCategory';

import {
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={Signup} />
    <Stack.Screen name="forgot_password" component={Forgot_Password} />
    <Stack.Screen name="Content" component={TabsNav} />
    <Stack.Screen name="Category" component={Category} />
  </Stack.Navigator>
);

const HomeTab = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

const TabsNav = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        height: 70,
        borderRadius: 10,
        ...styles.shadow,
      },
    }}>
    <Tab.Screen
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('./assets/icons/home.png')}
              resizeMode="contain"
              style={{
                width: 55,
                height: 55,
                tintColor: focused ? '#ffcd61' : '#393939',
              }}
            />
          </View>
        ),
      }}
      name="Home"
      component={HomeTab}
    />
    <Tab.Screen
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('./assets/icons/search.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#ffcd61' : '#393939',
              }}
            />
          </View>
        ),
      }}
      name="Search"
      component={Search}
    />
    <Tab.Screen
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('./assets/icons/chat.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#ffcd61' : '#393939',
              }}
            />
          </View>
        ),
      }}
      name="Chat"
      component={Chat}
    />
    <Tab.Screen
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('./assets/icons/user.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#ffcd61' : '#393939',
              }}
            />
          </View>
        ),
      }}
      name="Profile"
      component={Profile}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#393939',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Router;
