import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    width: '100%',
    backgroundColor: 'white',
    position: 'relative',
    flexGrow: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: '5%',
    color: 'black',
  },
  card: {
    width: '90%',
    marginLeft: '5%',
    height: '15%',
    marginTop: '8%',
    position: 'relative',
  },
  image: {
    width: '35%',
    height: '100%',
    borderRadius: 10,
  },
  name: {
    fontWeight: '700',
    fontSize: 20,
    color: 'black',
    position: 'absolute',
    left: '40%',
    top: '5%',
  },
  date: {
    fontWeight: '600',
    fontSize: 15,
    position: 'absolute',
    left: '40%',
    top: '25%',
  },
  price: {
    fontWeight: '600',
    fontSize: 13,
    position: 'absolute',
    left: '40%',
    top: '40%',
  },
  check: {
    height: 25,
    width: 25,
    position: 'absolute',
    right: '8%',
    top: '28%',
  },
});
