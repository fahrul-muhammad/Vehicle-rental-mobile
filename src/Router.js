import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import SplashScreen from 'react-native-splash-screen';

import Login from './screens/Login';
import Signup from './screens/signup';
import Forgot_Password from './screens/ForgotPassword';
import Home from './screens/home';
import Profile from './screens/profile';
import Search from './screens/search';
import Chat from './screens/Chat';
import Category from './screens/VehicleCategory';
import Detail from './screens/VehicleDetail/index';
import FirstStep from './screens/CheckOut/firstStep';
import secondStep from './screens/CheckOut/secondStep';
import lastStep from './screens/CheckOut/lastStep';
import Done from './screens/CheckOut/Done';
import History from './screens/history/index';
import AddVehicle from './screens/AddVehicle/index';
import UpdateProfile from './screens/profile/update';
import Filter from './screens/VehicleCategory/filter';
import RoomChat from './screens/Chat/roomChat/index';

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

const Router = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NativeBaseProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="forgot_password" component={Forgot_Password} />
        <Stack.Screen name="Content" component={TabsNav} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="FirstStep" component={FirstStep} />
        <Stack.Screen name="secondStep" component={secondStep} />
        <Stack.Screen name="lastStep" component={lastStep} />
        <Stack.Screen name="Done" component={Done} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="RoomChat" component={RoomChat} />
      </Stack.Navigator>
    </NativeBaseProvider>
  );
};

const HomeTab = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="HomePage" component={Home} />
    <Stack.Screen name="AddVehicle" component={AddVehicle} />
  </Stack.Navigator>
);

const ProfileTab = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="profile" component={Profile} />
    <Stack.Screen name="History" component={History} />
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
      component={ProfileTab}
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
