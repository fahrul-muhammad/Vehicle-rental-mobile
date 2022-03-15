import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundcolor: 'white',
    display: 'flex',
    flex: 1,
    position: 'relative',
  },
  head: {
    color: '#000',
    fontSize: 23,
    fontWeight: '700',
    paddingLeft: '5%',
  },
  photo: {
    width: 105,
    height: 105,
    borderRadius: 50,
    backgroundColor: '#C4C4C4',
    position: 'absolute',
    top: '10%',
    left: '37%',
  },
  add: {
    backgroundColor: '#FFCD61',
    width: 40,
    height: 40,
    borderRadius: 50,
    position: 'absolute',
    top: '59%',
    left: '57%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    color: '#000',
    fontWeight: '700',
  },
  input: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  drop: {
    borderColor: '#FFF',
    width: '100%',
  },
  countBtn: {
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: '#FFCD61',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: '90%',
    marginLeft: '5%',
    marginTop: '5%',
    backgroundColor: '#FFCD61',
    height: '8%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
