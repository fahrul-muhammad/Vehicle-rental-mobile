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

const Done = ({navigation, route}) => {
  console.log('DONE PAGE', route.params);

  const user = useSelector(state => state.auth.userData);
  console.log('REDUX', user);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>See History</Text>
      <Text style={styles.notif}>Payment Success!</Text>
      <Image
        style={styles.img}
        source={{
          uri: `${process.env.LOCAL_HOST}/${route.params.image}`,
        }}
      />
      <Text style={styles.name}>
        {route.params.quantity} {route.params.vehicleName}
      </Text>
      <Text style={styles.name}>{route.params.payment}</Text>
      <Text style={styles.name}>{route.params.day}</Text>
      <Text style={styles.name}>Jan 18 2022 to Jan 22 2022</Text>
      <View
        style={{
          width: '90%',
          height: '0.7%',
          backgroundColor: '#efefef',
          marginLeft: '5%',
          marginTop: '3%',
        }}></View>
      <Text style={styles.name}>ID : {route.params.history_id}</Text>
      <Text style={styles.name}>
        {user.name} {user.email}
      </Text>
      <Text style={styles.name}>{user.phone_number}</Text>
      <Text style={styles.name}>{user.address}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('History');
        }}>
        <Text
          style={{
            fontSize: 19,
            fontWeight: '700',
            color: 'black',
          }}>
          Total : {route.params.totalPrice}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Done;
