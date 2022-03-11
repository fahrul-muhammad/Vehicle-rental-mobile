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
import {update} from 'lodash';

const Category = ({navigation, route}) => {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState(route.params.order);
  const [sorting, setSorting] = useState(route.params.sorting);
  const [page, setPage] = useState(route.params.page);
  const [loading, setLoading] = useState(false);
  const regx = /\w+\s*/g;

  useEffect(() => {
    getVehicle();
  }, [route.params]);

  useEffect(() => {
    checkUpdate();
  }, []);

  const checkUpdate = () => {
    if (route.params.refresh == true) {
      getVehicle();
    } else {
      return null;
    }
  };

  const getVehicle = async () => {
    try {
      const {category, limit} = route.params;
      console.log(route);
      const result = await GetByCategory(category, page, limit, sorting, order);
      console.log('META', result.data.result.result.meta);
      setData(result.data.result.result.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const nextPage = () => {
    setLoading(true);
    setPage(page + 1);
    route.params.page = page;
    getVehicle();
  };

  const prevPage = () => {
    if (page > 1) {
      setLoading(true);
      setPage(page - 1);
      getVehicle();
    } else {
      return;
    }
  };

  console.log('PARAMS', route);
  return (
    <>
      {data.length < 5 || loading == true ? (
        <AppLoader />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <Text style={styles.head}>{route.params.category}</Text>
          <View style={styles.filter}>
            <TouchableOpacity
              style={{
                height: '100%',
                width: '15%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate('Filter', route.params)}>
              <View
                style={{
                  width: '100%',
                  height: '20%',
                  backgroundColor: '#C4C4C4',
                  borderRadius: 15,
                }}></View>
              <View
                style={{
                  width: '75%',
                  height: '20%',
                  backgroundColor: '#C4C4C4',
                  borderRadius: 15,
                }}></View>
              <View
                style={{
                  width: '50%',
                  height: '20%',
                  backgroundColor: '#C4C4C4',
                  borderRadius: 15,
                }}></View>
            </TouchableOpacity>
            <Text
              style={{
                paddingLeft: '5%',
                fontSize: 20,
                fontWeight: '600',
              }}>
              Filter
            </Text>
          </View>
          {data.map(val => {
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
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '80%',
              height: 40,
              marginLeft: '10%',
              marginBottom: '5%',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => prevPage()}
              style={
                page <= 1
                  ? {
                      backgroundColor: '#C4C4C4',
                      height: '100%',
                      width: '30%',
                      borderRadius: 12,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }
                  : {
                      backgroundColor: '#FFCD61',
                      height: '100%',
                      width: '30%',
                      borderRadius: 12,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }
              }>
              <Text>Prev</Text>
            </TouchableOpacity>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 20,
              }}>
              {page}
            </Text>
            <TouchableOpacity
              onPress={() => nextPage()}
              style={{
                backgroundColor: '#FFCD61',
                height: '100%',
                width: '30%',
                borderRadius: 12,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default Category;
