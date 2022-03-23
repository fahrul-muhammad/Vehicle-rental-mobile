import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: 120,
    marginHorizontal: '5%',
    marginVertical: '5%',
    position: 'relative',
    borderRadius: 10,
  },
  cardImg: {
    height: '100%',
    width: '38%',
    position: 'absolute',
    borderRadius: 13,
  },
  name: {
    fontWeight: '700',
    position: 'absolute',
    left: '43%',
    fontSize: 20,
    color: '#000',
  },
  capacity: {
    fontWeight: '600',
    position: 'absolute',
    left: '43%',
    top: '22%',
  },
  distance: {
    fontWeight: '600',
    position: 'absolute',
    left: '43%',
    top: '38%',
    fontSize: 12,
  },
  avail: {
    fontWeight: '600',
    position: 'absolute',
    left: '43%',
    top: '52%',
    fontSize: 15,
    color: 'green',
  },
  price: {
    fontWeight: '600',
    position: 'absolute',
    left: '43%',
    top: '69%',
    fontSize: 15,
    color: '#000',
  },
});
