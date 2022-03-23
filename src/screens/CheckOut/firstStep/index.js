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
import {Picker} from '@react-native-picker/picker';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {useSelector} from 'react-redux';

const FirstStep = ({navigation, route}) => {
  const users = useSelector(state => state.auth.userData);
  const fullName = users.name.split(' ');
  const FirstName = fullName[0];
  const LastName = fullName[1];

  const [payment, setPayment] = useState('Prepayment (No Tax)');
  const [id, setId] = useState(0);
  const [firstName, setFirstName] = useState(FirstName);
  const [lastName, setLastName] = useState(LastName);
  const [phone, setPhone] = useState(users.phone_number);
  const [location, setLocation] = useState(users.address);
  console.log('users data', users);

  console.log('PARAMS HERE', route.params);
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <Text
          style={{
            paddingLeft: '5%',
            paddingTop: '5%',
            fontWeight: '700',
            fontSize: 25,
            color: '#000',
          }}>
          Payment
        </Text>
        <View style={styles.stepContainer}>
          <Image
            style={{
              position: 'absolute',
              top: '-50%',
            }}
            source={require('../../../assets/icons/Active.png')}
          />
          <Image
            style={{
              position: 'absolute',
              left: '45%',
              top: '15%',
            }}
            source={require('../../../assets/icons/Inactive.png')}
          />
          <Image
            style={{
              position: 'absolute',
              right: '13%',
              top: '15%',
            }}
            source={require('../../../assets/icons/step3.png')}
          />
          <KeyboardAvoidingView style={styles.input}>
            <TextInput
              style={{
                backgroundColor: '#efefef',
                width: '120%',
                paddingLeft: 15,
                marginTop: '25%',
                borderRadius: 10,
                height: '25%',
              }}
              placeholder="ID Card Number"
              onChangeText={text => setId(text)}
            />
            <TextInput
              style={{
                backgroundColor: '#efefef',
                width: '120%',
                paddingLeft: 15,
                marginTop: '7%',
                borderRadius: 10,
                height: '23%',
              }}
              placeholder="First Name"
              onChangeText={text => setFirstName(text)}
              defaultValue={FirstName}
            />
            <TextInput
              style={{
                backgroundColor: '#efefef',
                width: '120%',
                paddingLeft: 15,
                marginTop: '7%',
                borderRadius: 10,
                height: '23%',
              }}
              placeholder="Last Name"
              onChangeText={text => setLastName(text)}
              defaultValue={LastName}
            />
            <TextInput
              style={{
                backgroundColor: '#efefef',
                width: '120%',
                paddingLeft: 15,
                height: '23%',
                marginTop: '7%',
                borderRadius: 10,
              }}
              placeholder="Mobile Phone (Mustbe Active)"
              onChangeText={text => setPhone(text)}
              defaultValue={users.phone_number ? users.phone_number : '-'}
            />
            <TextInput
              style={{
                backgroundColor: '#efefef',
                width: '120%',
                paddingLeft: 15,
                marginTop: '7%',
                borderRadius: 10,
                height: '23%',
              }}
              placeholder="Location (Home,Office,Etc)"
              onChangeText={text => setLocation(text)}
              defaultValue={users.address ? users.address : '-'}
            />
          </KeyboardAvoidingView>
        </View>
        <View
          style={{
            position: 'absolute',
            width: '80%',
            height: '20%',
            bottom: '17%',
            left: '15%',
          }}>
          <Picker
            selectedValue={payment}
            onValueChange={val => setPayment(val)}
            style={styles.drop}>
            <Picker.Item
              label="Prepayment (No Tax)"
              value={'Prepayment (No Tax)'}
            />
            <Picker.Item
              label="Pay At The End (Include Tax)"
              value={'Pay At The End (Include Tax)'}
            />
            <Picker.Item
              label="Partial Payment (Include Tax)"
              value={'Partial Payment (Include Tax)'}
            />
          </Picker>
          <TouchableOpacity
            onPress={async () => {
              try {
                const params = {
                  idCard: id,
                  firstName: firstName,
                  lastName: lastName,
                  phone: phone,
                  location: location,
                  payment: payment,
                  ...route.params,
                };
                navigation.navigate('secondStep', params);
              } catch (error) {
                console.log(error);
              }
            }}
            style={styles.btn}>
            <Text
              style={{
                fontWeight: '700',
                color: '#000',
                fontSize: 17,
              }}>
              See Order Detail
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default FirstStep;
