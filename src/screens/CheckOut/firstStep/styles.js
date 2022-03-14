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
  },
  drop: {
    backgroundColor: '#efefef',
    width: '90%',
    height: '35%',
  },
  btn: {
    backgroundColor: '#FFCD61',
    width: '90%',
    marginTop: '36%',
    height: '35%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
