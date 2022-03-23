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

import React, {useState, useCallback, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {styles} from './styles';
import {SearchVehicle} from '../../module/vehicle';
import {debounce} from 'lodash';
import {Picker} from '@react-native-picker/picker';
import SearchCard from '../../components/searchCard';

const Search = ({navigation, params}) => {
  const [keyword, setKeyword] = useState('');
  const [datas, setDatas] = useState([]);
  const token = useSelector(state => state.auth.token);
  const [order, setOrder] = useState('ASC');
  const [sorting, setSorting] = useState('name');
  const [page, setPage] = useState(1);

  const onKeyDown = e => {
    if (e.nativeEvent.key == 'Enter') {
      console.log('MASUK');
    }
  };

  const changeText = async txt => {
    try {
      console.log(txt);
      const {data} = await SearchVehicle(txt, 1, order, sorting, token);
      console.log('ORDER', order);
      console.log('SORTING', sorting);
      console.log('data', data);
      setDatas(data.result.result.data);
    } catch (error) {
      console.log(error);
    }
  };
  const debounceHanlder = useCallback(debounce(changeText, 1500), [
    sorting,
    order,
  ]);

  useEffect(() => {
    debounceHanlder(keyword);
  }, [sorting, order, page]);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Input Vehicle Name"
        onChangeText={t => {
          debounceHanlder(t);
          setKeyword(t);
        }}
      />
      <View style={styles.drop}>
        <Picker
          selectedValue={sorting}
          style={styles.dropdown}
          onValueChange={val => setSorting(val)}>
          <Picker.Item label="Name (Default)" value={'name'} />
          <Picker.Item label="Newest" value={'id'} />
          <Picker.Item label="Price" value={'price'} />
        </Picker>
        <Picker
          selectedValue={order}
          style={styles.dropdown}
          onValueChange={val => setOrder(val)}>
          <Picker.Item label="ASCENDING (Default)" value={'ASC'} />
          <Picker.Item label="DESCENDING" value={'DESC'} />
        </Picker>
      </View>
      {datas.map(val => {
        return (
          <TouchableOpacity
            onPress={async () => {
              try {
                const params = {
                  id: val.id,
                };
                navigation.navigate('Detail', params);
              } catch (error) {
                console.log(error);
              }
            }}
            key={val.id}
            style={[styles.card, styles.elevation]}>
            <SearchCard
              name={val.Vehicle_Name}
              price={val.Price}
              location={val.location}
              photos={val.Image}
            />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Search;
