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
import {useSelector} from 'react-redux';
import {updateProfile} from '../../../module/users';
import FormsData from 'form-data';

const UpdateProfile = ({navigation, params}) => {
  const users = useSelector(state => state.auth.userData);
  const token = useSelector(state => state.auth.token);
  const [gender, setGender] = useState('');

  const [name, setName] = useState(users.name);
  const [email, setEmail] = useState(users.email);
  const [phone, setPhone] = useState(users.phone_number);
  const [dob, setDob] = useState(users.DoB);
  const [address, setAddress] = useState(users.address);

  const profileUpdate = async () => {
    try {
      const body = {
        name: name,
        // email: email,
        phone_number: phone,
        DoB: dob,
        address: address,
      };

      const forms = new FormsData();
      forms.append('name', name);
      forms.append('phone_number', phone);
      forms.append('DoB', dob);
      forms.append('address', address);

      const result = await updateProfile(body, token);
      console.log(result.data);
    } catch (error) {
      console.log('ERROR BRO', error.message);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={styles.container}>
      <Text style={styles.head}>Update Profile</Text>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '5%',
          position: 'relative',
        }}>
        <Image
          style={styles.img}
          source={{
            uri: `${process.env.LOCAL_HOST}${users.profilepic}`,
          }}
        />
        <View style={styles.add}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
            }}>
            +
          </Text>
        </View>
      </View>
      <View style={styles.radio}>
        <Radio.Group
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          name="radioGroup"
          name="myRadioGroup"
          value={gender}
          onChange={nextValue => setGender(nextValue)}>
          <Radio value="male" my={'1'}>
            Male
          </Radio>
          <Radio value="female" my={'1'}>
            Female
          </Radio>
        </Radio.Group>
      </View>
      <KeyboardAvoidingView>
        <Text style={styles.label}>Name :</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setName(text)}
          placeholder={users.name}
        />
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
  );
};

export default UpdateProfile;
