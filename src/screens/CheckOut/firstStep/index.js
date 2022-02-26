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

const FirstStep = ({navigation, route}) => {
  const [payment, setPayment] = useState('Prepayment (No Tax)');
  const [id, setId] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState(0);
  const [location, setLocation] = useState('');

  console.log('PARAMS HERE', route.params);
  return (
    <View style={styles.container}>
      <Text
        style={{
          paddingLeft: '5%',
          paddingTop: '5%',
          fontWeight: '700',
          fontSize: 25,
          color: 'black',
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
              width: '100%',
              marginTop: '30%',
              borderRadius: 10,
              height: '20%',
            }}
            placeholder="ID Card Number"
            onChangeText={text => setId(text)}
          />
          <TextInput
            style={{
              backgroundColor: '#efefef',
              width: '100%',
              marginTop: '9%',
              borderRadius: 10,
              height: '20%',
            }}
            placeholder="First Name"
            onChangeText={text => setFirstName(text)}
          />
          <TextInput
            style={{
              backgroundColor: '#efefef',
              width: '100%',
              marginTop: '9%',
              borderRadius: 10,
              height: '20%',
            }}
            placeholder="Last Name"
            onChangeText={text => setLastName(text)}
          />
          <TextInput
            style={{
              backgroundColor: '#efefef',
              width: '100%',
              height: '20%',
              marginTop: '9%',
              borderRadius: 10,
            }}
            placeholder="Mobile Phone (Mustbe Active)"
            onChangeText={text => setPhone(text)}
          />
          <TextInput
            style={{
              backgroundColor: '#efefef',
              width: '100%',
              marginTop: '9%',
              borderRadius: 10,
              height: '20%',
            }}
            placeholder="Location (Home,Office,Etc)"
            onChangeText={text => setLocation(text)}
          />
        </KeyboardAvoidingView>
      </View>
      <View
        style={{
          position: 'absolute',
          width: '80%',
          height: '20%',
          bottom: '10%',
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
              color: 'black',
              fontSize: 17,
            }}>
            See Order Detail
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FirstStep;
