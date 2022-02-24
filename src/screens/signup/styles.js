import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    position: 'relative',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    paddingTop: 100,
    paddingLeft: 30,
    fontSize: 45,
    paddingRight: 20,
    color: 'white',
  },

  email: {
    marginLeft: '10%',
    paddingLeft: 5,
    height: '16%',
    width: '80%',
    color: 'black',
    backgroundColor: '#FFFF',
    marginTop: '20%',
    opacity: 0.8,
    borderRadius: 6,
  },
  phone: {
    marginLeft: '10%',
    height: '16%',
    width: '80%',
    color: 'black',
    backgroundColor: '#FFFF',
    marginTop: '5%',
    opacity: 0.8,
    borderRadius: 6,
  },
  password: {
    marginLeft: '10%',
    height: '16%',
    width: '80%',
    color: 'black',
    backgroundColor: '#FFFF',
    marginTop: '5%',
    opacity: 0.8,
    borderRadius: 6,
  },
  forgot: {
    paddingTop: '3%',
    paddingLeft: '10%',
    color: '#fff',
  },
  button: {
    position: 'absolute',
    bottom: '14%',
    width: '80%',
    backgroundColor: '#FFCD61',
    height: '7%',
    left: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  btnText: {
    fontWeight: '800',
    fontSize: 18,
  },
  login: {
    position: 'absolute',
    bottom: '10%',
    left: 40,
    color: '#fff',
  },
});
