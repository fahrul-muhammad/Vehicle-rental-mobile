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

const Chat = ({navigation}) => {
  const [keyword, setKeyword] = useState('Search Chat');
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={styles.container}>
      <Text style={styles.head}>Chat</Text>
      <TextInput
        onChangeText={text => setKeyword(text)}
        value={keyword}
        placeholder="Search Chat"
        style={styles.search}
      />
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('RoomChat')}>
        <View
          style={{
            width: '80%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Text style={styles.title}>Achmad Fauzan</Text>
          <Text style={styles.message}>Ready ga bang?</Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Text>Just Now</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('RoomChat')}>
        <View
          style={{
            width: '80%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Text style={styles.title}>Tri Sumanzaya</Text>
          <Text style={styles.message}>Ngeri Ngeri</Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Text>Just Now</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Chat;
