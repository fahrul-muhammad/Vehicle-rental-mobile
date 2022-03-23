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
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import Checkbox from '@react-native-community/checkbox';

const HistoryCard = props => {
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
    <View onLongPress={() => showModal()} style={styles.card}>
      <Image
        style={styles.img}
        source={imgSrc}
        onError={() => {
          onImageError();
        }}
        onLoad={() => {
          onImageLoaded();
        }}
      />
      <View style={styles.desc}>
        <Text
          style={{
            paddingTop: '5%',
            fontSize: 15,
            color: '#000',
            fontWeight: '700',
          }}>
          {props.vehicle}
        </Text>
        <Text
          style={{
            paddingTop: '5%',
            fontSize: 15,
            color: '#000',
          }}>
          {props.date}
        </Text>
        <Text
          style={{
            paddingTop: '5%',
            fontSize: 15,
            color: '#000',
          }}>
          Prepayment: Rp. {props.prepayment}
        </Text>
        <Text
          style={{
            paddingTop: '5%',
            fontSize: 15,
            color: 'green',
            fontWeight: '700',
          }}>
          {props.status}
        </Text>
      </View>
      <Checkbox
        style={{
          marginVertical: '15%',
        }}
        value={props.select}
        onValueChange={value => setSelect(value)}
        onCheckColor="black"
        animationDuration={0.5}
      />
    </View>
  );
};

export default HistoryCard;
