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
import {getVehicleById} from '../../module/vehicle';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import AppLoader from '../AppLoader';

const Detail = ({navigation, route}) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const [day, setDay] = useState('1 Day');
  const [isPending, setPending] = useState(false);
  console.log('PARAMS', route.params.id);

  const GetVehicle = async () => {
    try {
      const id = route.params.id;
      const data = await getVehicleById(id);
      console.log(data.data.result.result[0]);
      setData(data.data.result.result[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const users = useSelector(state => state.auth.userData);

  useEffect(() => {
    GetVehicle();
  }, []);

  console.log('DATA', data);

  const plusCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      return;
    }
  };
  return (
    <>
      {Object.keys(data).length < 6 ? (
        <AppLoader />
      ) : (
        <View style={styles.container}>
          <Image
            source={{
              uri: `${process.env.LOCAL_HOST}/${data.image}`,
            }}
            style={styles.image}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: '20%',
              top: '30%',
            }}>
            <Image
              style={styles.love}
              source={require('../../assets/icons/love.png')}
            />
          </TouchableOpacity>
          <View
            style={{
              position: 'absolute',
              top: '30%',
              right: '5%',
              backgroundColor: '#FFCD61',
              width: '13%',
              height: '3%',
              borderRadius: 10,
            }}>
            <Text
              style={{
                paddingLeft: '30%',
                top: '5%',
                color: 'white',
                fontWeight: '700',
              }}>
              8
            </Text>
            <Image
              source={require('../../assets/icons/star.png')}
              style={{
                tintColor: 'white',
                position: 'absolute',
                right: '20%',
                top: '15%',
              }}
            />
          </View>
          <Text style={styles.back}>Back</Text>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.price}>{data.price}/Day</Text>
          <Text style={styles.capacity}>Max For 2 Person</Text>
          <Text style={styles.prepayment}>No Prepayment</Text>
          <Text style={styles.avail}>Available</Text>
          <View
            style={{
              backgroundColor: '#FFCD6170',
              width: 50,
              height: 50,
              left: '5%',
              top: '1.5%',
              borderRadius: 10,
            }}>
            <Image
              style={{
                opacity: 1,
                top: '15%',
                left: '25%',
                width: 25,
                height: 35,
              }}
              source={require('../../assets/icons/titik.png')}
            />
          </View>
          <Text style={styles.location}>{data.location}</Text>
          <View
            style={{
              backgroundColor: '#FFCD6170',
              width: 50,
              height: 50,
              left: '5%',
              top: '3%',
              borderRadius: 10,
            }}>
            <Image
              style={{
                opacity: 1,
                top: '15%',
                left: '25%',
                width: 25,
                height: 35,
              }}
              source={require('../../assets/icons/walk.png')}
            />
          </View>
          <Text
            style={{
              left: '20%',
              fontSize: 20,
              position: 'absolute',
              top: '60.5%',
            }}>
            2 Kilometer From Your Location
          </Text>
          <Text
            style={{
              left: '5%',
              top: '5%',
              fontWeight: '700',
              fontSize: 20,
              color: 'black',
            }}>
            Select {data.category}
          </Text>
          <TouchableOpacity
            style={{
              position: 'absolute',
              backgroundColor: '#FFCD61',
              width: 29,
              height: 29,
              right: '25%',
              top: '67%',
              borderRadius: 50,
            }}
            onPress={minusCount}>
            <Text
              style={{
                fontWeight: '800',
                fontSize: 20,
                color: 'black',
                textAlign: 'center',
              }}>
              -
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: 'black',
              position: 'absolute',
              right: '17.5%',
              top: '67.5%',
              fontWeight: '700',
            }}>
            {count}
          </Text>
          <TouchableOpacity
            style={{
              position: 'absolute',
              backgroundColor: '#FFCD61',
              width: 29,
              height: 29,
              right: '5%',
              top: '67%',
              borderRadius: 50,
            }}
            onPress={plusCount}>
            <Text
              style={{
                fontWeight: '800',
                fontSize: 20,
                color: 'black',
                textAlign: 'center',
              }}>
              +
            </Text>
          </TouchableOpacity>
          <View style={styles.inputDate}>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                paddingTop: '9%',
              }}>
              Select Date
            </Text>
          </View>
          <Picker
            style={styles.dayInput}
            selectedValue={day}
            onValueChange={val => setDay(val)}>
            <Picker.Item label="1 Day" value={'1 Day'} />
            <Picker.Item label="2 Day" value={'2 Day'} />
            <Picker.Item label="3 Day" value={'3 Day'} />
          </Picker>
          {data.user_id !== users.id ? (
            <TouchableOpacity
              style={styles.btn}
              onPress={async () => {
                try {
                  const params = {
                    id: route.params.id,
                    day: day,
                    quantity: count,
                    totalPrice: count * data.price,
                    image: data.image,
                    vehicleName: data.name,
                  };
                  navigation.navigate('FirstStep', params);
                } catch (error) {
                  console.log(error);
                }
              }}>
              <Text style={styles.btnText}>Reservation</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.btn}
              onPress={async () => {
                try {
                  const params = {
                    id: route.params.id,
                    day: day,
                    quantity: count,
                    totalPrice: count * data.price,
                    image: data.image,
                    vehicleName: data.name,
                  };
                  navigation.navigate('FirstStep', params);
                } catch (error) {
                  console.log(error);
                }
              }}>
              <Text style={styles.btnText}>Edit</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </>
  );
};

export default Detail;
