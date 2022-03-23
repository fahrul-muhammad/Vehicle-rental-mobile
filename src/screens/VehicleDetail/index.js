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
  const [day, setDay] = useState('');
  const [isPending, setPending] = useState(false);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
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
  const [until, setUntil] = useState('');

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
    let NextDate =
      tempDate.getDate() +
      day +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    setText(fDate);
    setUntil(NextDate);
  };

  // const numberFormater = value => {
  //   new Intl.NumberFormat('id-ID', {
  //     style: 'currency',
  //     currency: 'IDR',
  //     minimumFractionDigits: 0,
  //   }).format(value);
  // };

  const formatRupiah = money => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(money);
  };

  const onImageLoaded = () => {
    setLoaded(true);
  };

  const onImageError = () => {
    setError(true);
  };

  let imgSrc = !error
    ? {uri: `${process.env.LOCAL_HOST}/${data.image}`}
    : require('../../assets/icons/default-vehicle.jpg');

  return (
    <>
      {users.id == data.user_id ? console.log('BENAR') : console.log('SALAH')}
      {Object.keys(data).length < 6 ? (
        <AppLoader />
      ) : (
        <View style={styles.container}>
          <Image
            source={imgSrc}
            style={styles.image}
            onLoad={() => {
              onImageLoaded();
            }}
            onError={() => {
              onImageError();
            }}
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
                color: '#fff',
                fontWeight: '700',
              }}>
              8
            </Text>
            <Image
              source={require('../../assets/icons/star.png')}
              style={{
                tintcolor: '#fff',
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
            <Text style={styles.price}>{formatRupiah(data.price)}/Day</Text>
          ) : (
            <TextInput
              style={styles.price}
              defaultValue={`${formatRupiah(data.price)}/Day`}
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
                color: '#000',
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
                  color: '#000',
                  textAlign: 'center',
                }}>
                -
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                color: '#000',
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
                  color: '#000',
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
                <TouchableOpacity
                  style={styles.inputDate}
                  onPress={() => showMode('date')}>
                  <Text
                    style={{
                      color: '#000',
                      textAlign: 'center',
                      paddingTop: '9%',
                    }}>
                    {text}
                  </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.dayInput}>
                  <Text
                    style={{
                      color: '#000',
                      textAlign: 'center',
                      paddingTop: '14%',
                    }}>
                    Select Date
                  </Text>
                </TouchableOpacity> */}
                <Picker
                  selectedValue={day}
                  onValueChange={val => setDay(val)}
                  style={styles.dayInput}>
                  <Picker.Item label="1 Day" value={1} />
                  <Picker.Item label="2 Day" value={2} />
                  <Picker.Item label="3 Day" value={3} />
                  <Picker.Item label="4 Day" value={4} />
                  <Picker.Item label="5 Day" value={5} />
                  <Picker.Item label="6 Day" value={6} />
                  <Picker.Item label="7 Day" value={7} />
                </Picker>
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
                    date: text,
                    toDate: until,
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
