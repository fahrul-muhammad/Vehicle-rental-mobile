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

const regx = /\w+\s*/g;

const CardVehicle = (props, {navigation}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const onImageLoaded = () => {
    setLoaded(true);
  };

  const onImageError = () => {
    setError(true);
  };

  let imgSrc = !error
    ? {
        uri: `${process.env.LOCAL_HOST}/${props.photos}`,
      }
    : require('../../assets/icons/default-vehicle.jpg');

  return (
    <View style={styles.card}>
      <Image
        source={imgSrc}
        onError={() => {
          onImageError();
        }}
        onLoad={() => {
          onImageLoaded();
        }}
        style={styles.cardImg}
      />
      <Text style={styles.name}>{String(props.name).match(regx)}</Text>
      <Text style={styles.capacity}>Max For 2 Person</Text>
      <Text style={styles.distance}>2.1 Kilometer From Your Location</Text>
      <Text style={styles.avail}>Available</Text>
      <Text style={styles.price}>{props.Price}/Day</Text>
    </View>
  );
};

export default CardVehicle;
