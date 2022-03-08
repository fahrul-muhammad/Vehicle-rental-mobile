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

const SecondStep = ({navigation, route}) => {
  console.log('SECOND STEP PARAMS', route.params);

  const formater = num => {
    return 'Rp' + num.toFixed(2).replace(/(\d) (?=(\d{3})+(?!\d))/g, 'Rp1,');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '90%',
          marginLeft: '5%',
          flexDirection: 'row',
          position: 'relative',
        }}>
        <Image source={require('../../../assets/icons/Active.png')} />
        <Image source={require('../../../assets/icons/Active2.png')} />
        <Image
          style={{
            tintColor: 'grey',
          }}
          source={require('../../../assets/icons/Active3.png')}
        />
        <Text
          style={{
            position: 'absolute',
            right: '15.3%',
            top: '29%',
            color: 'white',
            fontWeight: '600',
            fontSize: 20,
          }}>
          3
        </Text>
      </View>
      <Image
        source={{
          uri: `${process.env.LOCAL_HOST}/${route.params.image}`,
        }}
        style={{
          width: '80%',
          height: '25%',
          marginLeft: '10%',
          borderRadius: 10,
        }}
      />
      <Text
        style={{
          paddingLeft: '10%',
          paddingTop: '4%',
          fontSize: 19,
          fontWeight: '600',
          color: 'black',
        }}>
        {route.params.quantity} {route.params.vehicleName}
      </Text>
      <Text
        style={{
          paddingLeft: '10%',
          paddingTop: '2%',
          fontSize: 19,
          fontWeight: '600',
          color: 'black',
        }}>
        {route.params.payment}
      </Text>
      <Text
        style={{
          paddingLeft: '10%',
          paddingTop: '2%',
          fontSize: 19,
          fontWeight: '600',
          color: 'black',
        }}>
        Jan 18 To Jan 22 2022
      </Text>
      <Text
        style={{
          paddingLeft: '10%',
          paddingTop: '35%',
          fontSize: 25,
          fontWeight: '700',
          color: 'black',
        }}>
        Sub Total : Rp.{route.params.totalPrice}
      </Text>
      <Image
        source={require('../../../assets/icons/Pricing.png')}
        style={{
          position: 'absolute',
          right: '10%',
          bottom: '18%',
        }}
      />
      <TouchableOpacity
        onPress={async () => {
          try {
            const params = {
              ...route.params,
            };
            navigation.navigate('lastStep', params);
          } catch (error) {
            console.log(error);
          }
        }}
        style={styles.btn}>
        <Text
          style={{
            fontWeight: '700',
            color: 'black',
            fontSize: 20,
          }}>
          Get Payment Code
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondStep;
