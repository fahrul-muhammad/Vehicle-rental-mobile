import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '100%',
    backgroundColor: '#fff',
  },
  head: {
    fontSize: 28,
    color: '#000',
    fontWeight: '700',
    paddingLeft: '5%',
    paddingTop: '4%',
  },
  search: {
    width: '90%',
    backgroundColor: '#C4C4C4',
    marginLeft: '5%',
    borderRadius: 12,
    paddingLeft: '5%',
    fontSize: 15,
    marginTop: '2%',
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    height: 100,
    marginLeft: '5%',
    marginTop: '3%',
    borderBottomWidth: 5,
    borderBottomColor: '#C4C4C4',
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontWeight: '700',
    color: '#000',
    paddingTop: '3%',
    fontSize: 18,
  },
  message: {
    fontWeight: '700',
    color: '#000',
    paddingTop: '3%',
  },
});
