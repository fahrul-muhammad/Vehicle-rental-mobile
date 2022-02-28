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

import React, {useState} from 'react';
import {styles} from './styles';
import {SearchVehicle} from '../../module/vehicle';

const Search = ({navigation, params}) => {
  const [keyword, setKeyword] = useState('');

  const onKeyDown = e => {
    if (e.nativeEvent.key == 'Enter') {
      console.log('MASUK');
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Input Vehicle Name"
        onKeyPress={e => console.log('KEY PRESS', e)}
      />
      <View style={[styles.card, styles.elevation]}>
        <Image
          resizeMode="cover"
          style={styles.imgCard}
          source={require('../../assets/Aerox3.jpg')}
        />
        <Text style={styles.location}>Location</Text>
        <Text style={styles.nameCard}>Name</Text>
        <Text style={styles.status}>Available</Text>
        <Text style={styles.price}>Price</Text>
      </View>
    </ScrollView>
  );
};

export default Search;
