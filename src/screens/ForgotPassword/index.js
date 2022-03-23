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
import {SendOtp, setNewPassword} from '../../module/auth';
import Loading from '../AppLoader/index';
import Toast from 'react-native-toast-message';

const Forgot_Password = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSending, setSending] = useState(false);
  const [password, setPassword] = useState('');
  const [repeat, setRepeat] = useState('');
  const [msg, setMsg] = useState('');
  const [isErr, setErr] = useState(false);
  const [pin, setPin] = useState('');

  const sendEmail = async () => {
    try {
      const body = {
        email: email,
      };
      setErr(false);
      setLoading(true);
      const result = await SendOtp(body);
      setSending(true);
      setLoading(false);
      console.log(result.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const SendPassword = async () => {
    try {
      setErr(false);
      const body = {
        pin: pin,
        password: password,
      };
      if (password.length < 8) {
        setLoading(false);
        setErr(true);
        setMsg('Password must be 8 character');
        return;
      }
      if (password !== repeat) {
        setLoading(false);
        setErr(true);
        setMsg('Password not match');
        return;
      }
      setLoading(true);
      const result = await setNewPassword(body);
      console.log(result.data);
      setLoading(false);
      showToast();
      setTimeout(() => {
        navigation.navigate('Login');
      }, 4000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Reset Password Success',
    });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
          style={styles.container}>
          <ImageBackground
            source={require('../../assets/forgotpass-background.jpg')}
            style={styles.image}>
            <Text style={styles.text}>THAT’S OKAY, WE GOT YOUR BACK</Text>
            <Text style={styles.mid}>
              Enter your email to get reset password code. If you don’t receive
              any code Resend Code
            </Text>
            <KeyboardAvoidingView>
              {isSending ? (
                <>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter OTP"
                    onChangeText={text => setPin(text)}
                  />
                  <TextInput
                    style={styles.password}
                    secureTextEntry={true}
                    placeholder="Enter Your New Password"
                    onChangeText={text => setPassword(text)}
                  />
                  <TextInput
                    style={styles.password}
                    placeholder="Enter Your Repeat Your Password"
                    secureTextEntry={true}
                    onChangeText={text => setRepeat(text)}
                  />

                  {isErr ? <Text style={styles.err}>{msg}</Text> : null}
                </>
              ) : (
                <TextInput
                  style={styles.input}
                  placeholder="Enter Your Email"
                  onChangeText={text => setEmail(text)}
                />
              )}
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  if (isSending) {
                    SendPassword();
                  } else {
                    sendEmail();
                  }
                }}>
                <Text style={styles.btnText}>
                  {isSending ? 'Set Password' : 'Send Email'}
                </Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </ImageBackground>
        </ScrollView>
      )}
      <Toast position="bottom" />
    </>
  );
};

export default Forgot_Password;
