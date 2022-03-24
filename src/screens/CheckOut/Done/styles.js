import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 22,
    paddingTop: '5%',
    paddingLeft: '5%',
    fontWeight: '700',
    color: '#000',
  },
  notif: {
    color: 'green',
    fontSize: 25,
    paddingTop: '5%',
    fontWeight: '700',
    textAlign: 'center',
  },
  img: {
    width: '90%',
    height: '20%',
    marginLeft: '5%',
    marginTop: '3%',
    borderRadius: 10,
  },
  name: {
    paddingLeft: '5%',
    paddingTop: '3%',
    fontSize: 20,
    fontWeight: '700',
  },
  btn: {
    width: '90%',
    marginLeft: '5%',
    height: '8%',
    backgroundColor: '#FFCD61',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: '15%',
  },
});
