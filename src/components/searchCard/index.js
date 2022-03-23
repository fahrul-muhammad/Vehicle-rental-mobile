import {
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

import React, {useState, useCallback} from 'react';
import {styles} from './styles';

const SearchCard = props => {
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

  const formatRupiah = money => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(money);
  };

  return (
    <View
    // onPress={async () => {
    //   try {
    //     const params = {
    //       id: val.id,
    //     };
    //     navigation.navigate('Detail', params);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }}
    // key={val.id}
    >
      <Image
        resizeMode="cover"
        style={styles.imgCard}
        source={imgSrc}
        onLoad={() => {
          onImageLoaded();
        }}
        onError={() => {
          onImageError();
        }}
      />
      <Text style={styles.location}>{props.location}</Text>
      <Text style={styles.nameCard}>{props.name}</Text>
      <Text style={styles.status}>Available</Text>
      <Text style={styles.price}>{formatRupiah(props.price)}</Text>
    </View>
  );
};

export default SearchCard;
