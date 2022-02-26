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

const Profile = ({navigation}) => {
  return (
    <View>
      <Text
        onPress={() => {
          navigation.navigate('History');
        }}>
        Profile Page
      </Text>
    </View>
  );
};

export default Profile;
