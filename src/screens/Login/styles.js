import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    paddingTop: 100,
    paddingLeft: 20,
    fontSize: 45,
    color: 'white',
  },
  email: {
    marginLeft: '10%',
    paddingLeft: 5,
    height: '15%',
    width: '80%',
    color: 'black',
    backgroundColor: '#FFFF',
    marginTop: '45%',
    opacity: 0.8,
    borderRadius: 6,
  },
  password: {
    marginLeft: '10%',
    height: '15%',
    width: '80%',
    color: 'black',
    backgroundColor: '#FFFF',
    marginTop: '5%',
    opacity: 0.8,
    borderRadius: 6,
  },
  forgot: {
    paddingTop: '3%',
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    width: '80%',
    backgroundColor: '#FFCD61',
    height: '11%',
    marginLeft: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  btnText: {
    fontWeight: '800',
    fontSize: 18,
    color: '#393939',
  },
  signup: {
    paddingTop: '3%',
    color: '#FFF',
    textAlign: 'center',
  },
  error: {
    color: 'red',
    fontWeight: '600',
    paddingTop: '1%',
    textAlign: 'center',
  },
});
