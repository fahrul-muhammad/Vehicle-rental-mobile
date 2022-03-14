import {
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableOpacity,
  View,
  ScrollView,
  Modal,
  Touchable,
} from 'react-native';

import {Radio} from 'native-base';

import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {styles} from './styles';
import {logout} from '../../redux/action/auth';

// NOTIFICATION TESTING
import {successNotification} from '../../module/notification';

const Profile = ({navigation}) => {
  const [gender, setGender] = useState('');
  const [isShow, setShow] = useState(false);
  const users = useSelector(state => state.auth.userData);
  const [image, setImage] = useState();
  console.log('users', users);

  const dispatch = useDispatch();

  const LogOut = () => {
    dispatch(logout());
    setShow(!isShow);
    navigation.navigate('Login');
  };

  const showModal = () => {
    setShow(!isShow);
  };

  return (
    <>
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
            source={
              users.profilepic
                ? {
                    uri: `${process.env.LOCAL_HOST}${users.profilepic}`,
                  }
                : image
            }
            onError={() => {
              setImage(require('../../assets/icons/dummy-profile-pic.png'));
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
        <TouchableOpacity onPress={() => showModal()} style={styles.btn}>
          <Text style={styles.btnText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal
        transparent
        visible={isShow}
        onRequestClose={() => setShow(!isShow)}>
        <View style={styles.modal}>
          <View style={styles.content}>
            <Text style={styles.modalTxt}>Are you sure to log out ?</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                position: 'absolute',
                bottom: '0%',
                width: '100%',
                height: '40%',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  ...styles.modalBtn,
                  backgroundColor: '#393939',
                }}
                onPress={() => LogOut()}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '700',
                    color: '#FFCD61',
                  }}>
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.modalBtn,
                  backgroundColor: '#FFCD61',
                }}
                onPress={() => showModal()}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '700',
                    color: '#393939',
                  }}>
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Profile;
