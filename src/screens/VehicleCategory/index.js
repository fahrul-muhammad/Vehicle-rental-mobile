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
import {GetByCategory} from '../../module/vehicle';
import AppLoader from '../AppLoader';

const Category = ({navigation, route}) => {
  const [data, setData] = useState([]);
  const regx = /\w+\s*/g;

  useEffect(() => {
    getVehicle();
  }, []);

  const getVehicle = async () => {
    try {
      const category = route.params.category;
      const result = await GetByCategory(category);
      console.log(result.data.result.result.data);
      setData(result.data.result.result.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log('PARAMS', route.params.category);
  return (
    <>
      {data.length < 5 ? (
        <AppLoader />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <Text style={styles.head}>{route.params.category}</Text>
          {data.map(val => {
            console.log('VAL', val);
            return (
              <TouchableOpacity
                key={val.id}
                style={styles.card}
                onPress={async () => {
                  try {
                    const params = {
                      id: val.id,
                    };
                    navigation.navigate('Detail', params);
                  } catch (error) {
                    console.log(error);
                  }
                }}>
                <Image
                  source={{
                    uri: `${process.env.LOCAL_HOST}/${val.photos}`,
                  }}
                  style={styles.cardImg}
                />
                <Text style={styles.name}>
                  {String(val.Vehicle_Name).match(regx)}
                </Text>
                <Text style={styles.capacity}>Max For 2 Person</Text>
                <Text style={styles.distance}>
                  2.1 Kilometer From Your Location
                </Text>
                <Text style={styles.avail}>Available</Text>
                <Text style={styles.price}>{val.Price}/Day</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}
    </>
  );
};

export default Category;
