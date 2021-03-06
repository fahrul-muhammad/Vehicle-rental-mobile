import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '27%',
    position: 'relative',
  },
  back: {
    color: 'black',
    position: 'absolute',
    top: '3%',
    left: '5%',
    fontSize: 24,
  },
  love: {
    // left: '90%',
    // top: '200%',
    tintColor: 'black',
  },
  name: {
    fontSize: 30,
    fontWeight: '700',
    color: 'black',
    left: '5%',
    paddingTop: '2%',
  },
  price: {
    fontSize: 30,
    fontWeight: '700',
    color: 'black',
    left: '5%',
  },
  capacity: {
    fontSize: 22,
    fontWeight: '500',
    left: '5%',
  },
  prepayment: {
    fontSize: 22,
    fontWeight: '500',
    left: '5%',
  },
  avail: {
    fontSize: 22,
    fontWeight: '500',
    left: '5%',
    color: 'green',
  },
  location: {
    fontWeight: '600',
    fontSize: 20,
    paddingLeft: '5%',
  },
  inputDate: {
    backgroundColor: '#efefef',
    width: '50%',
    opacity: 1,
    height: 55,
    color: 'white',
  },
  dayInput: {
    backgroundColor: '#efefef',
    width: '35%',
    height: 55,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: '#FFCD61',
    height: '8%',
    width: '90%',
    marginTop: '5%',
    marginLeft: '5%',
    borderRadius: 10,
  },
  btnText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: '5%',
  },
  editStatus: {
    width: '90%',
    backgroundColor: '#efefef',
    borderRadius: 10,
  },
});
