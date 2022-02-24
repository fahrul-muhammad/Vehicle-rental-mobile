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

const Forgot_Password = ({navigation}) => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/forgotpass-background.jpg')}
        style={styles.image}>
        <Text style={styles.text}>THAT’S OKAY, WE GOT YOUR BACK</Text>
        <Text style={styles.mid}>
          Enter your email to get reset password code. If you don’t receive any
          code Resend Code
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Email"
          onChangeText={text => setEmail(text)}
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Send Code</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Forgot_Password;
