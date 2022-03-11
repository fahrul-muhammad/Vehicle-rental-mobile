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
import {styles} from './styles';
import {connect} from 'react-redux';
import AppLoader from '../AppLoader/index';

import {
  GetAllBike,
  GetAllMotor,
  GetAllCar,
  GetFavorite,
} from '../../module/vehicle';
import {GetImage} from '../../module/image';
import {NavigationContainer} from '@react-navigation/native';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      car: [],
      motor: [],
      bike: [],
      favorite: [],
      isPending: false,
    };
  }

  componentDidMount() {
    this.getCarr();
    this.getMotor();
    this.getBike();
    this.GetFavorite();
  }

  getCarr = async () => {
    try {
      const carData = await GetAllCar();
      console.log('CAR DATA', carData.data.result.result.data);
      this.setState({car: carData.data.result.result.data});
    } catch (error) {
      console.log(error);
    }
  };

  getMotor = async () => {
    try {
      const motorData = await GetAllMotor();
      console.log('Motor DATA', motorData.data.result.result.data);
      this.setState({motor: motorData.data.result.result.data});
    } catch (error) {
      console.log(error);
    }
  };

  getBike = async () => {
    try {
      const result = await GetAllBike();
      console.log('BIKE DATA', result.data.result.result.data);
      this.setState({bike: result.data.result.result.data});
    } catch (error) {
      console.log(error);
    }
  };

  GetFavorite = async () => {
    try {
      const token = this.props.token;
      const result = await GetFavorite(token);
      console.log('FAVORITE DATA', result.data.result);
      this.setState({favorite: result.data.result});
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        {this.state.car.length < 5 &&
        this.state.bike.length < 5 &&
        this.state.motor.length < 5 &&
        this.state.favorite.length < 5 ? (
          <AppLoader />
        ) : (
          <ScrollView style={styles.container}>
            <Image
              style={styles.image}
              source={require('../../assets/home-background.jpg')}
            />
            {this.props.users.role_id == 3 ? (
              <TouchableOpacity
                style={styles.addBtn}
                onPress={() => this.props.navigation.navigate('AddVehicle')}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '700',
                    color: 'black',
                  }}>
                  Add New Vehicle
                </Text>
              </TouchableOpacity>
            ) : null}
            <Text style={styles.first}>Favorite</Text>
            {/* <Text style={styles.firstLink}>See All</Text> */}
            <View style={styles.recomendContainer}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {this.state.favorite.map(val => {
                  return (
                    <TouchableOpacity
                      onPress={async () => {
                        try {
                          const params = {
                            id: val.vehicle_id,
                          };
                          this.props.navigation.navigate('Detail', params);
                        } catch (error) {
                          console.log(error);
                        }
                      }}
                      key={val.vehicle_id}>
                      <Image
                        style={styles.cardImg}
                        source={{
                          uri: `${process.env.LOCAL_HOST}/${val.photo}`,
                        }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
            <Text style={styles.first}>Car</Text>
            <Text
              style={styles.carLink}
              onPress={async () => {
                try {
                  const param = {
                    category: 'car',
                    page: 1,
                    limit: 8,
                    sorting: 'id',
                    order: 'ASC',
                    refresh: false,
                  };
                  this.props.navigation.navigate('Category', param);
                } catch (error) {
                  console.log(error);
                }
              }}>
              See All
            </Text>
            <View style={styles.recomendContainer}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {this.state.car.map(val => {
                  return (
                    <TouchableOpacity
                      key={val.id}
                      onPress={async () => {
                        try {
                          const params = {
                            id: val.id,
                          };
                          this.props.navigation.navigate('Detail', params);
                        } catch (error) {
                          console.log(error);
                        }
                      }}>
                      <Image
                        style={styles.cardImg}
                        source={{
                          uri: `${process.env.LOCAL_HOST}/${val.photos}`,
                        }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
            <Text style={styles.first}>Motor Bike</Text>
            <Text
              onPress={async () => {
                try {
                  const param = {
                    category: 'motorbike',
                    page: 1,
                    limit: 8,
                    sorting: 'id',
                    order: 'ASC',
                    refresh: false,
                  };
                  this.props.navigation.navigate('Category', param);
                } catch (error) {
                  console.log(error);
                }
              }}
              style={styles.motorLink}>
              See All
            </Text>
            <View style={styles.recomendContainer}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {this.state.motor.map(val => {
                  return (
                    <TouchableOpacity
                      key={val.id}
                      onPress={async () => {
                        try {
                          const params = {
                            id: val.id,
                          };
                          this.props.navigation.navigate('Detail', params);
                        } catch (error) {
                          console.log(error);
                        }
                      }}>
                      <Image
                        style={styles.cardImg}
                        source={{
                          uri: `${process.env.LOCAL_HOST}/${val.photos}`,
                        }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
            <Text style={styles.first}>Bike</Text>
            <Text
              onPress={async () => {
                try {
                  const param = {
                    category: 'bike',
                    page: 1,
                    limit: 8,
                    sorting: 'id',
                    order: 'ASC',
                    refresh: false,
                  };
                  this.props.navigation.navigate('Category', param);
                } catch (error) {
                  console.log(error);
                }
              }}
              style={styles.bikeLink}>
              See All
            </Text>
            <View style={styles.lastContainer}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {this.state.bike.map(val => {
                  return (
                    <TouchableOpacity
                      key={val.id}
                      onPress={async () => {
                        try {
                          const params = {
                            id: val.id,
                          };
                          this.props.navigation.navigate('Detail', params);
                        } catch (error) {
                          console.log(error);
                        }
                      }}>
                      <Image
                        key={val.vehicle_id}
                        style={styles.cardImg}
                        source={{
                          uri: `${process.env.LOCAL_HOST}/${val.photos}`,
                        }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </ScrollView>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    users: state.auth.userData,
  };
};

export default connect(mapStateToProps)(Home);
