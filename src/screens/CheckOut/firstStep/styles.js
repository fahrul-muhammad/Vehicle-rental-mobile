import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: 800,
    position: 'relative',
  },
  stepContainer: {
    height: '6%',
    width: '80%',
    marginLeft: '10%',
    position: 'relative',
  },
  input: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginLeft: '5%',
    color: '#000',
  },
  drop: {
    backgroundColor: '#efefef',
    width: '107%',
    height: '35%',
    marginTop: 20,
    marginLeft: -28,
  },
  btn: {
    backgroundColor: '#FFCD61',
    width: '107%',
    marginTop: '30%',
    height: '35%',
    display: 'flex',
    marginLeft: -27,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
