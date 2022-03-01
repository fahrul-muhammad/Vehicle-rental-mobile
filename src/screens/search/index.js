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
import {useSelector} from 'react-redux';
import {styles} from './styles';
import {SearchVehicle} from '../../module/vehicle';
import {debounce} from 'lodash';

const Search = ({navigation, params}) => {
  const [keyword, setKeyword] = useState('');
  const [datas, setDatas] = useState([]);
  const token = useSelector(state => state.auth.token);

  const onKeyDown = e => {
    if (e.nativeEvent.key == 'Enter') {
      console.log('MASUK');
    }
  };

  const changeText = async txt => {
    try {
      console.log(txt);
      const {data} = await SearchVehicle(txt, token);
      console.log('data', data);
      setDatas(data.result);
    } catch (error) {
      console.log(error);
    }
  };
  const debounceHanlder = useCallback(debounce(changeText, 1500), []);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Input Vehicle Name"
        onChangeText={t => debounceHanlder(t)}
        // onKeyPress={e => console.log('KEY PRESS', e)}
      />
      {datas.map(val => {
        return (
          <View key={val.id} style={[styles.card, styles.elevation]}>
            <Image
              resizeMode="cover"
              style={styles.imgCard}
              source={{
                uri: `${process.env.LOCAL_HOST}/${val.Image}`,
              }}
            />
            <Text style={styles.location}>{val.location}</Text>
            <Text style={styles.nameCard}>{val.Vehicle_Name}</Text>
            <Text style={styles.status}>Available</Text>
            <Text style={styles.price}>{val.Price}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Search;
