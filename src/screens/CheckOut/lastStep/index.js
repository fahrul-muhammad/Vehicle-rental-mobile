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
import {useSelector} from 'react-redux';
import {styles} from './styles';
import {CheckOut} from '../../../module/checkout';

const lastStep = ({navigation, route}) => {
  const {id} = useSelector(state => state.auth.userData);
  const token = useSelector(state => state.auth.token);

  const FinishPayment = async () => {
    try {
      const body = {
        vehicle_id: route.params.id,
        date: route.params.day,
        prepayment: route.params.totalPrice,
        status_id: 1,
        user_id: id,
        rating: 8,
      };
      const result = await CheckOut(token, body);
      console.log(result.data.result.id);
      const params = {
        history_id: result.data.result.id,
        ...route.params,
      };
      navigation.navigate('Done', params);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        style={styles.text}
        showsVerticalScrollIndicator={false}>
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
          <Image source={require('../../../assets/icons/Active3.png')} />
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '700',
            color: 'black',
            fontSize: 20,
          }}>
          Payment Code
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '700',
            color: 'black',
            fontSize: 25,
            paddingTop: '2%',
          }}>
          532452345
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '500',
            fontSize: 20,
          }}>
          Insert your payment code while you transfer booking order
        </Text>
        <Text
          style={{
            textAlign: 'center',
            paddingTop: '3%',
          }}>
          Pay Before :
        </Text>
        <Text
          style={{
            textAlign: 'center',
            paddingTop: '3%',
            color: 'red',
            fontSize: 25,
            fontWeight: '600',
          }}>
          10:00
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '500',
            fontSize: 20,
          }}>
          Bank Account Information :
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 25,
            color: 'black',
            paddingTop: '2%',
          }}>
          0290-90203-345-2
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '500',
            fontSize: 20,
          }}>
          {route.params.vehicleName}
        </Text>
        <View
          style={{
            width: '90%',
            backgroundColor: '#efefef',
            height: '0.5%',
            borderRadius: 10,
            marginLeft: '5%',
            marginTop: '5%',
          }}></View>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '500',
            fontSize: 20,
          }}>
          Booking Code : <Text style={{color: 'green'}}>ASJ124</Text>{' '}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '400',
            fontSize: 15,
          }}>
          Use Booking Code to Pick up Your {route.params.vehicleName}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFCD61',
            width: '70%',
            height: '8%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '2%',
            marginLeft: '15%',
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontWeight: '700',
            }}>
            Copy Payment & Booking Code
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            paddingLeft: '10%',
            paddingTop: '2%',
            fontWeight: '700',
          }}>
          Order Details :
        </Text>
        <Text
          style={{
            paddingLeft: '10%',
            paddingTop: '2%',
            fontWeight: '600',
          }}>
          {route.params.quantity} {route.params.vehicleName}
        </Text>
        <Text
          style={{
            paddingLeft: '10%',
            paddingTop: '2%',
            fontWeight: '600',
          }}>
          {route.params.payment}
        </Text>
        <Text
          style={{
            paddingLeft: '10%',
            paddingTop: '2%',
            fontWeight: '600',
          }}>
          {route.params.day}
        </Text>
        <TouchableOpacity
          onPress={FinishPayment}
          style={{
            backgroundColor: '#FFCD61',
            width: '80%',
            height: '8%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            position: 'absolute',
            bottom: '1.5%',
            left: '10%',
            zIndex: 999,
          }}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 20,
            }}>
            Finish Payment
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default lastStep;
