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
import {connect, useSelector} from 'react-redux';
import {AddNewVehicle} from '../../module/vehicle';
import {launchImageLibrary} from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';

import FormsData from 'form-data';
import AppLoader from '../AppLoader';

const AddVehicle = ({navigation, params}) => {
  const [type, setType] = useState('Select Category');
  const [stock, setStock] = useState(1);
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState('');
  const [photo, setPhoto] = useState('');
  const [desc, setDesc] = useState('');
  const [isPending, setPending] = useState(false);

  const token = useSelector(state => state.auth.token);

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
    launchImageLibrary({includeBase64: true}, response => {
      if (response.assets[0].uri) {
        // console.log('BERHASIL', response);
        setPhoto(response.assets[0]);
        setImage(response.assets[0].uri);
      }
    });
  };

  // const openGallery = () => {
  //   ImagePicker.openPicker({
  //     cropping: true,
  //   })
  //     .then(image => {
  //       console.log('IMAGE BRO', image);
  //       setPhoto(image);
  //       setImage(image.path);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  const addItems = async () => {
    try {
      const forms = new FormsData();
      // forms.append('name', name);
      // forms.append('price', price);
      // forms.append('category', type);
      // forms.append('image', photo);
      // forms.append('stock', stock);
      // forms.append('description', desc);
      // forms.append('location', location);

      const img = [
        {
          name: 'images',
          type: 'image/png',
          filename: photo,
          data: RNFetchBlob.wrap(photo.uri),
        },
      ];

      forms.append('image', img);

      const result = await AddNewVehicle(img);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadVehicle = async () => {
    setPending(true);
    RNFetchBlob.fetch(
      'POST',
      `${process.env.LOCAL_HOST}/vehicle`,
      {
        'Content-Type': 'multipart/form-data',
        token: token,
      },
      [
        {
          name: 'image',
          type: photo.type,
          filename: photo.fileName,
          data: RNFetchBlob.wrap(photo.uri),
        },
        {
          name: 'name',
          data: JSON.stringify(name),
        },
        {
          name: 'price',
          data: JSON.stringify(price),
        },
        {
          name: 'category',
          data: JSON.stringify(type),
        },
        {
          name: 'stock',
          data: JSON.stringify(stock),
        },
        {
          name: 'description',
          data: JSON.stringify(desc),
        },
        {
          name: 'location',
          data: JSON.stringify(location),
        },
      ],
    )
      .then(res => {
        console.log(res.data.result);
        const data = JSON.parse(res.data);
        console.log('ID', data.result.id);
        setPending(false);
        try {
          const params = {
            id: data.result.id,
          };
          navigation.navigate('Detail', params);
        } catch (error) {
          console.log(error);
        }
      })
      .catch(ers => {
        setPending(false);
      });
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        style={styles.container}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 30,
            marginTop: '5%',
          }}>
          <View
            style={{
              width: '50%',
              height: '100%',
            }}>
            <Text
              style={{
                fontSize: 23,
                paddingLeft: '10%',
                color: '#000',
                fontWeight: '700',
              }}>
              Add new item
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              width: '50%',
              height: '100%',
            }}>
            <Text
              style={{
                fontSize: 23,
                textAlign: 'right',
                paddingRight: '10%',
              }}>
              Cancel
            </Text>
          </View>
        </View>
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
              source={
                image !== ''
                  ? {
                      uri: image,
                    }
                  : require('../../assets/icons/default-vehicle.jpg')
              }
              resizeMode="cover"
            />
          </View>
          <TouchableOpacity style={styles.add} onPress={() => openLibrary()}>
            <Text
              style={{
                fontSize: 30,
              }}>
              +
            </Text>
          </TouchableOpacity>
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
              marginTop: '1.8%',
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
              marginTop: '1.8%',
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
              marginTop: '1.8%',
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
              marginTop: '1.8%',
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
              marginTop: '1.8%',
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
                right: '11.8%',
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
        </KeyboardAvoidingView>
        <TouchableOpacity onPress={() => uploadVehicle()} style={styles.btn}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              color: 'black',
            }}>
            Save Product
          </Text>
        </TouchableOpacity>
      </ScrollView>
      {isPending ? <AppLoader /> : null}
    </>
  );
};

export default AddVehicle;
