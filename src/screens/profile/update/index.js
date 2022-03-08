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
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Radio, Container, List} from 'native-base';
import {styles} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {updateProfile} from '../../../module/users';
import {launchImageLibrary} from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';
import AppLoader from '../../AppLoader';

import {GetUserData} from '../../../module/auth';
import {saveAction} from '../../../redux/action/auth';

const UpdateProfile = ({navigation, params}) => {
  const users = useSelector(state => state.auth.userData);
  const token = useSelector(state => state.auth.token);
  const [gender, setGender] = useState(users.gender);
  const [male, setMale] = useState(false);
  const [Female, setFemale] = useState(false);
  const [isPress, setPress] = useState(false);

  const [name, setName] = useState(users.name);
  const [email, setEmail] = useState(users.email);
  const [phone, setPhone] = useState(users.phone_number);
  const [dob, setDob] = useState(users.DoB);
  const [address, setAddress] = useState(users.address);
  const [images, setImage] = useState('');
  const [isPendding, setPendding] = useState(false);

  const [profilepic, setProfilepic] = useState(users.profilepic);

  const dispatch = useDispatch();

  const profileUpdate = () => {
    setPendding(true);
    RNFetchBlob.fetch(
      'PATCH',
      `${process.env.LOCAL_HOST}/users`,
      {
        'Content-Type': 'multipart/form-data',
        token: token,
      },
      [
        {
          name: 'profilepic',
          type: images.type,
          filename: images.fileName,
          data: RNFetchBlob.wrap(images.uri),
        },
        {
          name: 'name',
          data: name,
        },
        {
          name: 'gender',
          data: gender,
        },
        {
          name: 'email',
          data: email,
        },
        {
          name: 'phone_number',
          data: phone,
        },
        {
          name: 'DoB',
          data: dob,
        },
        {
          name: 'address',
          data: address,
        },
      ],
    )
      .then(res => {
        console.log(res.data);
        GetUserData(token)
          .then(result => {
            console.log('USER RESULT', result.data.result.result[0]);
            dispatch(saveAction(result.data.result.result[0]));
          })
          .catch(error);
      })
      .catch(err => {
        console.log(err);
        setPendding(false);
      });
  };

  const openLibrary = () => {
    launchImageLibrary({includeBase64: true}, response => {
      if (response.assets[0].uri) {
        // console.log('BERHASIL', response);
        setImage(response.assets[0]);
        setProfilepic(response.assets[0].uri);
        console.log(profilepic);
      }
    });
  };

  const genderMale = () => {
    setGender('male');
    setMale(true);
    setFemale(false);
  };

  const genderFemale = () => {
    setGender('female');
    setFemale(true);
    setMale(false);
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        style={styles.container}>
        <Text style={styles.head}>Update Profile</Text>
        <View
          style={{
            width: '100%',
            height: '20%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Image
            source={
              profilepic == users.profilepic
                ? {
                    uri: `${process.env.LOCAL_HOST}${profilepic}`,
                  }
                : {uri: profilepic}
            }
            style={styles.img}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#393939',
                ...styles.camera,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  color: '#FFCD61',
                }}>
                Take A Picture
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFCD61',
                ...styles.camera,
              }}
              onPress={() => openLibrary()}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  color: '#393939',
                }}>
                Browse from gallery
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <KeyboardAvoidingView>
          <Text style={styles.label}>Name :</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setName(text)}
            placeholder={users.name}
          />
          <View style={styles.radio}>
            <TouchableOpacity
              style={styles.radioBtn}
              onPress={() => genderMale()}>
              {male ? <View style={styles.dot}></View> : null}
            </TouchableOpacity>
            <Text style={styles.labelRadio}>Male</Text>
            <TouchableOpacity
              style={styles.radioBtn}
              onPress={() => genderFemale()}>
              {Female ? <View style={styles.dot}></View> : null}
            </TouchableOpacity>
            <Text style={styles.labelRadio}>Female</Text>
          </View>
          <Text style={styles.label}>Email Address :</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setEmail(text)}
            placeholder={users.email}
          />
          <Text style={styles.label}>Phone Number :</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setPhone(text)}
            placeholder={users.phone_number}
          />
          <Text style={styles.label}>Date of Birth :</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setDob(text)}
            placeholder={users.DoB}
          />
          <Text style={styles.label}>Delifery Address :</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setAddress(text)}
            placeholder={users.address}
          />
        </KeyboardAvoidingView>
        <TouchableOpacity onPress={() => profileUpdate()} style={styles.btn}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 20,
            }}>
            Save Change
          </Text>
        </TouchableOpacity>
      </ScrollView>
      {isPendding ? <AppLoader /> : null}
    </>
  );
};

export default UpdateProfile;
