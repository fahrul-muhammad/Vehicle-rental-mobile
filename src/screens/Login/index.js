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
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import AppLoader from '../AppLoader/index';

import {Login as UserLogin, GetUserData} from '../../module/auth';
import {loginAction, saveAction} from '../../redux/action/auth';

import {styles} from './styles';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPending, setPending] = useState(false);
  const [isError, setError] = useState(false);

  const dispatch = useDispatch();

  const LoginAction = async () => {
    try {
      const body = {
        email: email,
        password: password,
      };
      setPending(true);
      const result = await UserLogin(body);
      dispatch(loginAction(result.data.result.token));
      const userData = await GetUserData(result.data.result.token);
      dispatch(saveAction(userData.data.result.result[0]));
      navigation.navigate('Content');
    } catch (error) {
      setPending(false);
      setError(true);
      console.log('ERROR AXIOS', error);
    }
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        style={styles.container}>
        <ImageBackground
          source={require('../../assets/Login-background.jpg')}
          style={styles.image}>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate('Content')}>
            LET'S EXPLORE THE WORLD
          </Text>
          <KeyboardAvoidingView>
            <View>
              <TextInput
                onChangeText={text => setEmail(text)}
                placeholder="email"
                style={styles.email}
              />
              <TextInput
                onChangeText={text => setPassword(text)}
                placeholder="Password"
                style={styles.password}
              />
              {isError ? (
                <Text style={styles.error}>
                  Wrong Email Or Password,Try Again
                </Text>
              ) : null}
              <Text
                style={styles.forgot}
                onPress={() => {
                  navigation.navigate('forgot_password');
                }}>
                Forgot Your Password?
              </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={LoginAction}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <Text
              onPress={() => {
                navigation.navigate('SignUp');
              }}
              style={styles.signup}>
              Dont have an accoutn? Lets Sign Up
            </Text>
          </KeyboardAvoidingView>
        </ImageBackground>
      </ScrollView>
      {isPending ? <AppLoader /> : null}
    </>
  );
};

export default Login;
