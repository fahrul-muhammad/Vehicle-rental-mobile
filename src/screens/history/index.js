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
import Checkbox from '@react-native-community/checkbox';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {GetUserHistory} from '../../module/history';

import AppLoader from '../AppLoader/index';

const History = ({navigation, route}) => {
  const token = useSelector(state => state.auth.token);
  const [data, setData] = useState([]);
  const [select, setSelect] = useState(false);

  useEffect(() => {
    GetHistory();
  }, []);

  const GetHistory = async () => {
    try {
      const result = await GetUserHistory(token);
      console.log(result.data.result);
      setData(result.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {data.length < 5 ? (
        <AppLoader />
      ) : (
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
          style={{
            width: '100%',
            backgroundColor: 'white',
            minHeight: '100%',
          }}>
          <Text style={styles.title}>History Order</Text>
          <View style={styles.subTitle}>
            <Text style={styles.text}>A Week Ago</Text>
            <Text style={styles.text}>Select</Text>
          </View>
          {data.map(val => {
            return (
              <View style={styles.card} key={val.id}>
                <Image
                  style={styles.img}
                  source={{
                    uri: `${process.env.LOCAL_HOST}/${val.image}`,
                  }}
                />
                <View style={styles.desc}>
                  <Text
                    style={{
                      paddingTop: '5%',
                      fontSize: 15,
                      color: 'black',
                      fontWeight: '700',
                    }}>
                    {val.vehicle}
                  </Text>
                  <Text
                    style={{
                      paddingTop: '5%',
                      fontSize: 15,
                      color: 'black',
                    }}>
                    {val.date}
                  </Text>
                  <Text
                    style={{
                      paddingTop: '5%',
                      fontSize: 15,
                      color: 'black',
                    }}>
                    Prepayment: Rp. {val.prepayment}
                  </Text>
                  <Text
                    style={{
                      paddingTop: '5%',
                      fontSize: 15,
                      color: 'green',
                      fontWeight: '700',
                    }}>
                    {val.status}
                  </Text>
                </View>
                <Checkbox
                  style={{
                    marginVertical: '15%',
                  }}
                  value={select}
                  onValueChange={value => setSelect(value)}
                  onCheckColor="black"
                  animationDuration={0.5}
                />
              </View>
            );
          })}
        </ScrollView>
      )}
    </>
  );
};

export default History;

/* 

<Checkbox
                  style={styles.check}
                  value={select}
                  onValueChange={value => setSelect(value)}
                  onCheckColor="black"
                  animationDuration={0.5}
                />
*/
