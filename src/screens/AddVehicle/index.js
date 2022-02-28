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
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';
import {styles} from './styles';
import {connect} from 'react-redux';
import {AddNewVehicle} from '../../module/vehicle';
import {launchImageLibrary} from 'react-native-image-picker';

const AddVehicle = ({navigation, params}) => {
  const [type, setType] = useState('Select Category');
  const [stock, setStock] = useState(1);
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState('');
  const [photo, setPhoto] = useState('');
  const [desc, setDesc] = useState('');

  const plusCount = () => {
    setStock(stock + 1);
  };

  const minusCount = () => {
    if (stock > 1) {
      setStock(stock - 1);
    } else {
      return;
    }
  };

  const openLibrary = () => {
    launchImageLibrary({}, response => {
      if (response.assets[0].uri) {
        console.log('BERHASIL', response);
        setPhoto(response.assets[0]);
        setImage(response.assets[0].uri);
      }
    });
  };

  const addItems = async () => {
    const forms = new FormData();
    const test = forms.append('file', photo);

    try {
      // const datas = await AddNewVehicle(test);
      const datas = await fetch('http://192.168.1.6:8000/vehicle/test', {
        method: 'post',
        body: photo,
        headers: {
          'Content-Type': 'multipart/form-data; ',
        },
      });
      console.log(datas);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={styles.container}>
      <Text style={styles.head}>Add new item</Text>
      <Text
        style={{
          position: 'absolute',
          top: '3%',
          fontSize: 23,
          right: '5.5%',
        }}>
        Cancel
      </Text>
      <View
        style={{
          width: '100%',
          height: 120,
          position: 'relative',
        }}>
        <View style={styles.photo}>
          <Image
            style={{
              resizeMode: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: 50,
            }}
            source={{
              uri: image,
            }}
          />
        </View>
        <View style={styles.add}>
          <Text
            style={{
              fontSize: 30,
              // fontWeight: '800',
              // textAlign: 'center',
              // paddingTop: '5%',
            }}
            onPress={() => openLibrary()}>
            +
          </Text>
        </View>
      </View>
      <KeyboardAvoidingView>
        <View
          style={{
            width: '90%',
            marginLeft: '5%',
          }}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            onChangeText={text => setName(text)}
            style={styles.input}
            placeholder="Input the product name min.30"
          />
        </View>
        <View
          style={{
            width: '90%',
            marginLeft: '5%',
            marginTop: '3%',
          }}>
          <Text style={styles.label}>Price</Text>
          <TextInput
            onChangeText={text => setPrice(parseInt(text))}
            style={styles.input}
            placeholder="Input the product Price"
          />
        </View>
        <View
          style={{
            width: '90%',
            marginLeft: '5%',
            marginTop: '3%',
          }}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            onChangeText={text => setDesc(text)}
            style={styles.input}
            placeholder="Type delivery information"
          />
        </View>
        <View
          style={{
            width: '90%',
            marginLeft: '5%',
            marginTop: '3%',
          }}>
          <Text style={styles.label}>Location</Text>
          <TextInput
            onChangeText={text => setLocation(text)}
            style={styles.input}
            placeholder="input the product location"
          />
        </View>
        <View
          style={{
            width: '90%',
            marginLeft: '5%',
            marginTop: '3%',
          }}>
          <Text style={styles.label}>Add To</Text>
          <Picker
            style={styles.drop}
            onValueChange={val => setType(val)}
            selectedValue={type}>
            <Picker.Item
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
              }}
              label="Select category"
            />
            <Picker.Item value={1} label={'Car'} />
            <Picker.Item value={2} label={'Motorbike'} />
            <Picker.Item value={3} label={'Bike'} />
          </Picker>
        </View>
        <View
          style={{
            width: '90%',
            marginLeft: '5%',
            marginTop: '3%',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Text style={styles.label}>Available Stock</Text>
          <TouchableOpacity
            style={{
              ...styles.countBtn,
              position: 'absolute',
              right: 0,
            }}
            onPress={() => plusCount()}>
            <Text
              style={{
                fontSize: 19,
                fontWeight: '700',
              }}>
              +
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              position: 'absolute',
              right: '13%',
              fontSize: 15,
              fontWeight: '700',
              color: 'black',
            }}>
            {stock}
          </Text>
          <TouchableOpacity
            style={{
              ...styles.countBtn,
              position: 'absolute',
              right: '20%',
            }}
            onPress={() => minusCount()}>
            <Text
              style={{
                fontSize: 19,
                fontWeight: '700',
              }}>
              -
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => addItems()} style={styles.btn}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              color: 'black',
            }}>
            Save Product
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default AddVehicle;
