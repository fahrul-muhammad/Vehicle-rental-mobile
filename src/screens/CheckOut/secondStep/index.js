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

  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const onImageLoaded = () => {
    setLoaded(true);
  };

  const onImageError = () => {
    setError(true);
  };

  const formatRupiah = money => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(money);
  };

  let imgSrc = !error
    ? {uri: `${process.env.LOCAL_HOST}/${route.params.image}`}
    : require('../../../assets/icons/default-vehicle.jpg');

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
            color: '#fff',
            fontWeight: '600',
            fontSize: 20,
          }}>
          3
        </Text>
      </View>
      <Image
        source={imgSrc}
        style={{
          width: '80%',
          height: '25%',
          marginLeft: '10%',
          borderRadius: 10,
        }}
        onLoad={() => {
          onImageLoaded();
        }}
        onError={() => {
          onImageError();
        }}
      />
      <Text
        style={{
          paddingLeft: '10%',
          paddingTop: '4%',
          fontSize: 19,
          fontWeight: '600',
          color: '#000',
        }}>
        {route.params.quantity} {route.params.vehicleName}
      </Text>
      <Text
        style={{
          paddingLeft: '10%',
          paddingTop: '2%',
          fontSize: 19,
          fontWeight: '600',
          color: '#000',
        }}>
        {route.params.payment}
      </Text>
      <Text
        style={{
          paddingLeft: '10%',
          paddingTop: '2%',
          fontSize: 19,
          fontWeight: '600',
          color: '#000',
        }}>
        {route.params.date} To {route.params.toDate}
      </Text>
      <Text
        style={{
          paddingLeft: '10%',
          paddingTop: '35%',
          fontSize: 25,
          fontWeight: '700',
          color: '#000',
        }}>
        Sub Total : {formatRupiah(route.params.totalPrice)}
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
            color: '#000',
            fontSize: 20,
          }}>
          Get Payment Code
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondStep;
