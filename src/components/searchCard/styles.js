import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: 300,
    marginLeft: '5%',
    marginTop: '5%',
    borderRadius: 10,
    position: 'relative',
  },
  imgCard: {
    width: '95%',
    height: '50%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: '2.5%',
  },
  nameCard: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    paddingTop: '3%',
    paddingLeft: '5%',
  },
  location: {
    fontSize: 20,
    fontWeight: '600',
    paddingTop: '5%',
    paddingLeft: '5%',
  },
  status: {
    color: 'green',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: '5%',
    paddingLeft: '5%',
  },
  price: {
    position: 'absolute',
    right: '5%',
    bottom: '5%',
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  elevation: {
    elevation: 4,
    shadowColor: '#171717',
  },
});