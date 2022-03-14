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

import {styles} from './styles';
import {SignUp, Login, GetUserData} from '../../module/auth';
import AppLoader from '../AppLoader/index';
import {useDispatch} from 'react-redux';

import {loginAction, saveAction} from '../../redux/action/auth';

import PushNotification from 'react-native-push-notification';
import {setFireBaseToken as sendFBToken} from '../../module/users';
import {useEffect} from 'react';

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setError] = useState(false);
  const [isPending, setPending] = useState(false);
  const [FBToken, setFBToken] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    getFireBaseToken();
  }, []);

  const setFbToken = async token => {
    try {
      const FBtokenSend = {
        fire_base_token: FBToken,
      };
      await sendFBToken(FBtokenSend, token);
    } catch (error) {
      console.log('SET TOKEN ERROR', error);
    }
  };

  const getFireBaseToken = () => {
    PushNotification.configure({
      onRegister: function (token) {
        setFBToken(token.token);
      },
    });
  };

  const userSignUp = async () => {
    try {
      setError(false);
      const body = {
        name: name,
        email: email,
        password: password,
      };
      console.log('BODY BODY', body);
      setPending(true);
      const result = await SignUp(body);
      console.log('result sign up', result);
      const bodyLogin = {
        email: email,
        password: password,
      };
      const autoLogin = await Login(bodyLogin);
      dispatch(loginAction(autoLogin.data.result.token));
      const token = autoLogin.data.result.token;
      await setFbToken(token);
      const userData = await GetUserData(autoLogin.data.result.token);
      dispatch(saveAction(userData.data.result.result[0]));
      setPending(false);
      navigation.navigate('Content');
    } catch (error) {
      setPending(false);
      setError(true);
      console.log(error);
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
          source={require('../../assets/signup-background.jpg')}
          style={styles.image}>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate('Content')}>
            Let's Explore The World
          </Text>
          <KeyboardAvoidingView>
            <View
              style={{
                marginTop: '20%',
              }}>
              <TextInput
                placeholder="name"
                style={styles.name}
                placeholderTextColor={'black'}
                onChangeText={text => setName(text)}
              />
              <TextInput
                placeholder="email"
                style={styles.email}
                placeholderTextColor={'black'}
                onChangeText={text => setEmail(text)}
              />
              <TextInput
                style={styles.password}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor={'black'}
                onChangeText={text => setPassword(text)}
              />
              {isError ? (
                <Text style={styles.error}>Something wrong,Try Again</Text>
              ) : null}
            </View>
            <TouchableOpacity
              onPress={() => userSignUp()}
              style={styles.button}>
              <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
            <Text
              onPress={() => {
                navigation.navigate('Login');
              }}
              style={styles.signup}>
              Already have an account? lets Login
            </Text>
          </KeyboardAvoidingView>
        </ImageBackground>
      </ScrollView>
      {isPending ? <AppLoader /> : null}
    </>
  );
};

export default Signup;
