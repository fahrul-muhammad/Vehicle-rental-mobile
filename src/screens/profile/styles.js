import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 50,
    position: 'absolute',
    left: '7%',
  },
  name: {
    position: 'absolute',
    left: '35%',
    fontWeight: '700',
    fontSize: 20,
    color: 'black',
  },
  fav: {
    position: 'absolute',
    top: '18%',
    left: '8%',
  },
  text: {
    fontSize: 23,
    fontWeight: '700',
  },
  history: {
    position: 'absolute',
    top: '25%',
    left: '8%',
  },
  faq: {
    position: 'absolute',
    top: '33%',
    left: '8%',
  },
  help: {
    position: 'absolute',
    top: '41%',
    left: '8%',
  },
  update: {
    position: 'absolute',
    top: '49%',
    left: '8%',
  },
  btn: {
    position: 'absolute',
    bottom: '2%',
    width: '90%',
    height: '8%',
    backgroundColor: '#FFCD61',
    left: '5%',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontWeight: '700',
    fontSize: 20,
    color: 'black',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  content: {
    backgroundColor: '#fff',
    height: 180,
    width: 325,
    borderRadius: 12,
  },
  modalTxt: {
    color: '#000',
    textAlign: 'center',
    paddingTop: '5%',
    fontSize: 25,
  },
  modalBtn: {
    width: '40%',
    height: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
});
