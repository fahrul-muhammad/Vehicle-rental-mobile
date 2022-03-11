import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    backgroundColor: 'white',
  },
  head: {
    fontSize: 30,
    fontWeight: '700',
    color: 'black',
    paddingTop: '5%',
    paddingLeft: '10%',
  },
  filter: {
    marginTop: '5%',
    width: '50%',
    height: 30,
    marginLeft: '10%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    height: 120,
    marginHorizontal: '10%',
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
    color: 'black',
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
    color: 'black',
  },
});
