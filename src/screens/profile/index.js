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

import {Radio} from 'native-base';

import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {styles} from './styles';

const Profile = ({navigation}) => {
  const [gender, setGender] = useState('');
  const users = useSelector(state => state.auth.userData);
  console.log('users', users);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: 100,
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Image
          style={styles.img}
          source={{
            uri: `${process.env.LOCAL_HOST}${users.profilepic}`,
          }}
        />
        <Text style={styles.name}>{users.name}</Text>
      </View>
      <Text style={[styles.fav, styles.text]}>Your favorite </Text>
      <Text
        style={[styles.text, styles.history]}
        onPress={() => {
          navigation.navigate('History');
        }}>
        History
      </Text>
      <Text style={[styles.text, styles.faq]}>FAQ</Text>
      <Text style={[styles.text, styles.help]}>Help</Text>
      <Text
        style={[styles.text, styles.update]}
        onPress={() => navigation.navigate('UpdateProfile')}>
        Update Profile
      </Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;
