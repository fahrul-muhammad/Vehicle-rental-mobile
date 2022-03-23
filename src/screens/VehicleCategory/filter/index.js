import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

import {styles} from './styles';

const Filter = ({route, navigation}) => {
  const oldSort = route.params.sorting;
  const oldOrder = route.params.order;
  const [sorting, setSorting] = useState(route.params.sorting);
  const [order, setOrder] = useState(route.params.order);
  console.log('FILTER PARAMS', route);

  const ResetFilter = () => {
    setSorting(oldSort);
    setOrder(oldOrder);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '90%',
          height: 40,
          marginTop: '5%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: '5%',
        }}>
        <Text style={styles.head}>Filter</Text>
        <TouchableOpacity onPress={() => ResetFilter()} style={styles.btnReset}>
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              fontWeight: '500',
            }}>
            RESET
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '90%',
          marginLeft: '5%',
          height: 40,
          marginTop: '20%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
        <Text style={styles.label}>Select Filter</Text>
        <Picker
          selectedValue={sorting}
          onValueChange={val => setSorting(val)}
          style={styles.dropDown}>
          <Picker.Item label="Newest Vehicle (default)" value={'id'} />
          <Picker.Item label="Price" value={'price'} />
          <Picker.Item label="Name" value={'name'} />
        </Picker>
      </View>
      <View
        style={{
          width: '90%',
          marginLeft: '5%',
          height: 40,
          marginTop: '20%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
        <Text style={styles.label}>Select Order Data</Text>
        <Picker
          selectedValue={order}
          onValueChange={val => setOrder(val)}
          style={styles.dropDown}>
          <Picker.Item label="Ascending" value={'ASC'} />
          <Picker.Item label="Descending" value={'DESC'} />
        </Picker>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={async () => {
          try {
            const params = {
              ...route.params,
              order: order,
              sorting: sorting,
              refresh: true,
            };
            navigation.navigate('Category', params);
          } catch (error) {
            console.log(error);
          }
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
          }}>
          Apply
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Filter;
