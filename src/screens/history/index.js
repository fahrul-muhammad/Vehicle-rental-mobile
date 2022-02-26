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
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        style={{width: '100%', height: '100%'}}>
        <Text style={styles.title}>History Order</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '90%',
            marginTop: '5%',
            marginLeft: '5%',
            position: 'relative',
          }}>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              position: 'absolute',
              left: '37%',
              top: '0%',
            }}>
            A Month Ago
          </Text>
          <Text
            style={{
              textAlign: 'right',
              fontSize: 15,
              position: 'absolute',
              right: ' 5%',
              top: '0%',
            }}>
            {select ? 'Delet' : 'Select'}
          </Text>
        </View>
        {data.map(val => {
          return (
            <View style={styles.card}>
              <Image
                style={styles.image}
                source={{
                  uri: `${process.env.LOCAL_HOST}/${val.image}`,
                }}
              />
              <Text style={styles.name}>{val.vehicle}</Text>
              <Text style={styles.date}>{val.date}</Text>
              <Text style={styles.price}>Prepayment : Rp.{val.prepayment}</Text>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 15,
                  position: 'absolute',
                  color: val.status == 'HASBEEN RETURN' ? 'green' : 'red',
                  left: '40%',
                  top: '55%',
                }}>
                {val.status}
              </Text>
              <Checkbox
                style={styles.check}
                value={select}
                onValueChange={value => setSelect(value)}
                onCheckColor="black"
                animationDuration={0.5}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default History;
