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
import {SignUp} from '../../module/auth';

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const userSignUp = async () => {
    try {
      const body = {
        name: name,
        email: email,
        password: password,
      };
      const result = await SignUp(body);
      console.log(result.data);
      if (result.data.result == 'selamat datang') {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/signup-background.jpg')}
        style={styles.image}>
        <Text style={styles.text}>LET’S HAVE SOME RIDE</Text>
        <KeyboardAvoidingView>
          <View>
            <TextInput
              onChangeText={text => setName(text)}
              placeholder="Name"
              style={styles.email}
            />
            <TextInput
              onChangeText={text => setEmail(text)}
              placeholder="Email"
              style={styles.phone}
            />
            <TextInput
              onChangeText={text => setPassword(text)}
              placeholder="Password"
              style={styles.password}
            />
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity onPress={userSignUp} style={styles.button}>
          <Text style={styles.btnText}>Sign up</Text>
        </TouchableOpacity>
        <Text style={styles.login} onPress={() => navigation.navigate('Login')}>
          Already have an account? Let's Login
        </Text>
      </ImageBackground>
    </View>
  );
};

export default Signup;
