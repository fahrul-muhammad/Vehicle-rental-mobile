import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  head: {
    paddingTop: '3%',
    paddingLeft: '5%',
    fontSize: 25,
    fontWeight: '700',
    color: '#000',
  },
  card: {
    width: '90%',
    height: 110,
    marginLeft: '5%',
    marginTop: '3%',
    display: 'flex',
    flexDirection: 'row',
    shadowColor: '#000',
    elevation: 2,
    borderRadius: 1,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  name: {
    color: '#000',
    fontWeight: '700',
    fontSize: 18,
  },
  status: {
    color: 'green',
    fontWeight: '700',
    fontSize: 18,
  },
  input: {
    backgroundColor: '#C4C4C4',
    width: '100%',
    height: '100%',
    borderRadius: 12,
    paddingLeft: '5%',
    color: '#000',
  },
});
