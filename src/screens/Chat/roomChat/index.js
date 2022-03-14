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

const RoomChat = () => {
  const [keyword, setKeyword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Brio Palu</Text>
      <View style={styles.card}>
        <View
          style={{
            width: '50%',
            height: '100%',
          }}>
          <Image
            style={styles.img}
            source={require('../../../assets/Brio2.jpg')}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingLeft: '5%',
          }}>
          <Text style={styles.name}>Honda Brio</Text>
          <Text style={styles.status}>Available</Text>
          <Text style={styles.name}>Rp. 350.000/day</Text>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: '3%',
          width: '90%',
          height: 50,
          left: '5%',
        }}>
        <TextInput
          value={keyword}
          onChangeText={text => setKeyword(text)}
          style={styles.input}
          placeholder="Type a message"
        />
      </View>
    </View>
  );
};

export default RoomChat;
