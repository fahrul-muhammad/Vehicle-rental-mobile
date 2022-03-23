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
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Checkbox from '@react-native-community/checkbox';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {GetUserHistory} from '../../module/history';

import AppLoader from '../AppLoader/index';
import HistoryCard from '../../components/historyCard';

const History = ({navigation, route}) => {
  const token = useSelector(state => state.auth.token);
  const [data, setData] = useState([]);
  const [select, setSelect] = useState(false);
  const [show, setShow] = useState(false);

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

  const showModal = () => {
    setShow(!show);
  };

  return (
    <>
      {data.length < 5 && data.length > 1 ? (
        <AppLoader />
      ) : data.length <= 0 ? (
        <View>
          <Text>History Kosong</Text>
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
          style={{
            width: '100%',
            backgroundcolor: '#fff',
            minHeight: '100%',
          }}>
          <Text style={styles.title}>History Order</Text>
          <View style={styles.subTitle}>
            <Text style={styles.text}>A Week Ago</Text>
            <Text style={styles.text}>Select</Text>
          </View>
          {data.map(val => {
            return (
              <TouchableOpacity onLongPress={() => showModal()} key={val.id}>
                <HistoryCard
                  photos={val.image}
                  prepayment={val.prepayment}
                  vehicle={val.vehicle}
                  date={val.date}
                  select={select}
                  status={val.status}
                />
              </TouchableOpacity>
            );
          })}
          <Modal
            transparent
            visible={show}
            onRequestClose={() => setShow(!show)}>
            <View style={styles.modal}>
              <View style={styles.content}>
                <Text style={styles.modalTxt}>
                  Are you sure to delet this history ?
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    position: 'absolute',
                    bottom: '0%',
                    width: '100%',
                    height: '40%',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      ...styles.modalBtn,
                      backgroundColor: '#393939',
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: '700',
                        color: '#FFCD61',
                      }}>
                      Yes
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      ...styles.modalBtn,
                      backgroundColor: '#FFCD61',
                    }}
                    onPress={() => showModal()}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: '700',
                        color: '#393939',
                      }}>
                      No
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
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
