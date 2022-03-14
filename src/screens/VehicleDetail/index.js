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
import {updateVehicle} from '../../module/vehicle';
import RNFetchBlob from 'rn-fetch-blob';
import DateTimePicker from '@react-native-community/datetimepicker';

const Detail = ({navigation, route}) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const [day, setDay] = useState('1 Day');
  const [isPending, setPending] = useState(false);
  console.log('PARAMS', route.params.id);

  // UPDATE STATE
  const [name, setName] = useState(data.name);
  const [price, setPrice] = useState(data.price);
  const [location, setLocation] = useState(data.location);
  const [status, setStatus] = useState(data.status);
  const regx = /\w+\s*/g;

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
  const token = useSelector(state => state.auth.token);

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

  const updateData = () => {
    // try {
    //
    //   const result = await updateVehicle(data.id, form, token);
    //   console.log(result.data);
    //   setPending(false);
    // } catch (error) {
    //   console.log(error);
    //
    // }
    setPending(true);
    RNFetchBlob.fetch(
      'PATCH',
      `${process.env.LOCAL_HOST}/vehicle/update/${data.id}`,
      {
        'Content-Type': 'multipart/form-data',
        token: token,
      },
      [
        {
          name: 'name',
          data: name,
        },
        {
          name: 'price',
          data: price,
        },
        {
          name: 'location',
          data: JSON.stringify(location),
        },
        {
          name: 'stock',
          data: JSON.stringify(count),
        },
      ],
    )
      .then(res => {
        console.log(res.data);
        console.log('BERHASIL');
        setPending(false);
        navigation.navigate('Home');
      })
      .catch(err => {
        console.log(err);
        setPending(false);
      });
  };

  console.log('USERS', users.id);
  console.log('DATA', data.user_id);

  // DATE TIME PICKER
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('mode');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Select Date');

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    setText(fDate);
    console.log('RESULT: ', fDate);
  };

  return (
    <>
      {users.id == data.user_id ? console.log('BENAR') : console.log('SALAH')}
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
          {data.user_id !== users.id ? (
            <Text style={styles.name}>{String(data.name).match(regx)}</Text>
          ) : (
            <TextInput
              onChangeText={text => setName(text)}
              style={styles.name}
              defaultValue={`${String(data.name).match(regx)}`}
            />
          )}
          {data.user_id !== users.id ? (
            <Text style={styles.price}>{data.price}/Day</Text>
          ) : (
            <TextInput
              style={styles.price}
              defaultValue={`${data.price}/Day`}
              onChangeText={text => setPrice(text)}
            />
          )}
          <Text style={styles.capacity}>Max For 2 Person</Text>
          <Text style={styles.prepayment}>No Prepayment</Text>
          <Text style={styles.avail}>Available</Text>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: '#FFCD6170',
                width: 50,
                height: 50,
                marginLeft: '5%',
                borderRadius: 10,
                marginTop: '3%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: 25,
                  height: 35,
                }}
                source={require('../../assets/icons/titik.png')}
              />
            </View>
            {data.user_id !== users.id ? (
              <Text style={styles.location}>{data.location}</Text>
            ) : (
              <TextInput
                onChangeText={text => setLocation(text)}
                defaultValue={`${String(data.location).match(regx)}`}
                style={styles.location}
              />
            )}
          </View>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: '#FFCD6170',
                width: 50,
                height: 50,
                marginLeft: '5%',
                borderRadius: 10,
                marginTop: '3%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: 25,
                  height: 35,
                }}
                source={require('../../assets/icons/walk.png')}
              />
            </View>
            <Text style={styles.location}>2 kilometer from your location</Text>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '3%',
            }}>
            <Text
              style={{
                left: '5%',
                top: '5%',
                fontWeight: '700',
                fontSize: 20,
                color: 'black',
              }}>
              {data.user_id !== users.id
                ? `Select ${data.category}`
                : `Update Stock`}
            </Text>
            <TouchableOpacity
              style={{
                position: 'absolute',
                backgroundColor: '#FFCD61',
                width: 29,
                height: 29,
                right: '25%',
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
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: '5%',
            }}>
            {data.user_id !== users.id ? (
              <>
                <View style={styles.inputDate}>
                  <Text
                    style={{
                      color: 'black',
                      textAlign: 'center',
                      paddingTop: '9%',
                    }}>
                    {text}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.dayInput}
                  onPress={() => showMode('date')}>
                  <Text
                    style={{
                      color: 'black',
                      textAlign: 'center',
                      paddingTop: '14%',
                    }}>
                    Tap To Open
                  </Text>
                </TouchableOpacity>
                {show ? (
                  <DateTimePicker
                    value={date}
                    testID="dateTimePicker"
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChangeDate}
                  />
                ) : null}
              </>
            ) : (
              <>
                <Picker
                  style={styles.editStatus}
                  selectedValue={day}
                  onValueChange={val => setDay(val)}>
                  <Picker.Item label="Not Available" value={'Not Available'} />
                  <Picker.Item label="Available" value={'Available'} />
                </Picker>
              </>
            )}
          </View>
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
                    owner_id: data.user_id,
                  };
                  navigation.navigate('FirstStep', params);
                } catch (error) {
                  console.log(error);
                }
              }}>
              <Text style={styles.btnText}>Reservation</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.btn} onPress={() => updateData()}>
              <Text style={styles.btnText}>Edit</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      {isPending ? <AppLoader /> : null}
    </>
  );
};

export default Detail;
