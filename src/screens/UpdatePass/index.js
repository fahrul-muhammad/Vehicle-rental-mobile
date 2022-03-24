import {
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
  Touchable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {UpdateUserPassword} from '../../module/users';
import AppLoader from '../AppLoader/index';

const UpdatePassword = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [repeat, setRepeat] = useState('');
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const users = useSelector(state => state.auth.userData);
  const token = useSelector(state => state.auth.token);

  const updatePassword = async () => {
    try {
      setError(false);
      setMsg('');
      if (password.length < 8) {
        setMsg('Password must be at least 8 character');
        setError(true);
        return;
      }
      if (password !== repeat) {
        setMsg('Password not match');
        setError(true);
        return;
      }
      setLoading(true);
      const body = {
        email: users.email,
        newPassword: password,
      };
      const result = await UpdateUserPassword(body, token);
      console.log(result.data);
      setMsg('Update password success');
      setLoading(false);
      setError(false);
    } catch (error) {
      setMsg('Server Errror, Sorry');
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  //   console.log('PASSWORD TYPE', password.length < 8);

  console.log('users', users.email);
  console.log('token', token);
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: '#fff',
      }}>
      <ImageBackground
        source={require('../../assets/forgotpass-background.jpg')}
        style={{
          flex: 1,
        }}>
        <Text style={styles.text}>Update Password</Text>
        <KeyboardAvoidingView>
          <TextInput
            style={styles.input}
            placeholder="Enter your new password"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
          <TextInput
            style={styles.repeat}
            placeholder="Repeat your new password"
            secureTextEntry={true}
            onChangeText={text => setRepeat(text)}
          />
          {error ? (
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}>
              <Text style={styles.err}>{msg}</Text>
            </View>
          ) : (
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}>
              <Text style={styles.success}>{msg}</Text>
            </View>
          )}
        </KeyboardAvoidingView>
        <TouchableOpacity onPress={updatePassword} style={styles.btn}>
          <Text style={styles.btnTxt}>Confirm</Text>
        </TouchableOpacity>
      </ImageBackground>
      {loading ? <AppLoader /> : null}
    </ScrollView>
  );
};

export default UpdatePassword;
