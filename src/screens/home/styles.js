import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100%',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  first: {
    fontSize: 25,
    color: '#000',
    fontWeight: '700',
    paddingTop: '3%',
    paddingLeft: '5%',
  },
  recomendContainer: {
    minWidth: '100%',
  },
  lastContainer: {
    minWidth: '100%',
  },
  cardImg: {
    resizeMode: 'cover',
    width: 240,
    height: 150,
    marginTop: 10,
    marginLeft: 23,
    marginRight: 23,
    borderRadius: 10,
  },
  firstLink: {
    position: 'absolute',
    top: '21.5%',
    right: '5%',
    fontWeight: '600',
    fontSize: 18,
    color: 'black',
  },
  carLink: {
    position: 'absolute',
    top: '41.5%',
    right: '5%',
    fontWeight: '600',
    fontSize: 18,
    color: 'black',
  },
  motorLink: {
    position: 'absolute',
    top: '61.5%',
    right: '5%',
    fontWeight: '600',
    fontSize: 18,
    color: 'black',
  },
  bikeLink: {
    position: 'absolute',
    top: '81.5%',
    right: '5%',
    fontWeight: '600',
    fontSize: 18,
    color: 'black',
  },
});
