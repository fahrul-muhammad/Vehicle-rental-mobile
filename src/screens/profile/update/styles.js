import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'relative',
    minHeight: '100%',
    flexGrow: 1,
  },
  head: {
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: '5%',
    paddingTop: '5%',
    color: 'black',
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  add: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#FFCD61',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '55%',
    bottom: '5%',
  },
  radio: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
  },
  left: {
    position: 'absolute',
    left: '10%',
  },
  right: {
    position: 'absolute',
    right: '10%',
  },
  label: {
    fontWeight: '700',
    fontSize: 15,
    paddingLeft: '5%',
    paddingTop: '3%',
  },
  input: {
    borderColor: '#C4C4C4',
    width: '90%',
    marginLeft: '5%',
    marginTop: '3%',
    borderRadius: 10,
    borderWidth: 1,
  },
  btn: {
    backgroundColor: '#FFCD61',
    width: '90%',
    marginLeft: '5%',
    marginTop: '2%',
    height: '6%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
