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
} from 'react-native';
import React, {useState, useEffect} from 'react';

import {styles} from './styles';

const ImageCard = props => {
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
    <View>
      <Image
        key={props.id}
        style={styles.cardImg}
        source={imgSrc}
        onError={() => {
          onImageError();
        }}
        onLoad={() => {
          onImageLoaded();
        }}
      />
    </View>
  );
};

export default ImageCard;
