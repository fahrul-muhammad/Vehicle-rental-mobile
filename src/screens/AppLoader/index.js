import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

import {styles} from './styles';

const index = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <LottieView
        source={require('../../animation/Login.json')}
        autoPlay
        loop
        speed={1.5}
      />
      <Text
        style={{
          color: '#fff',
          fontSize: 15,
          fontWeight: '700',
        }}>
        Loading...{' '}
      </Text>
    </View>
  );
};

export default index;
