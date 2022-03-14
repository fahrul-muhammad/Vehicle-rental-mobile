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
  const [params, setParams] = useState({
    category: null,
    page: 0,
    limit: 8,
    sorting: 'id',
    order: 'asc',
  });
  const [loading, setLoading] = useState(false);

  const regx = /\w+\s*/g;

  useEffect(() => {
    console.log(route.params);
    if (route.params.refresh) {
      setLoading(true);
      setParams(route.params);
    }
  }, [route.params]);

  useEffect(() => {
    if (params.category) {
      getVehicle();
    }
  }, [params]);

  const getVehicle = async () => {
    try {
      const result = await GetByCategory(params);
      setData(result.data.result.result.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const nextPage = () => {
    const data = {...params};
    setLoading(true);
    data.page = data.page + 1;
    setParams(data);
  };

  const prevPage = () => {
    if (params.page > 1) {
      setLoading(true);
      const data = {...params};
      data.page = data.page - 1;
      setParams(data);
    } else {
      return;
    }
  };

  return (
    <>
      {data.length < 0 || loading == true ? (
        <AppLoader />
      ) : data.length <= 0 && loading == false ? (
        <View>
          <Text>Data not found</Text>
        </View>
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
                    uri: `http://192.168.1.6:8000/${val.photos}`,
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
                params.page <= 1
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
              {params.page}
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
