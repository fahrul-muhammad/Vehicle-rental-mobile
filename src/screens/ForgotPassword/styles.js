import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    position: 'relative',
  },
  image: {
    flex: 1,
    height: '100%',
  },
  text: {
    fontSize: 40,
    position: 'absolute',
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    top: '20%',
    left: '6%',
  },
  mid: {
    color: '#fff',
    position: 'absolute',
    top: '50%',
    fontWeight: '500',
    textAlign: 'center',
    left: '3%',
  },
  input: {
    position: 'absolute',
    top: '57%',
    height: '8%',
    width: '80%',
    left: '10%',
    backgroundColor: '#fff',
    borderRadius: 6,
    opacity: 0.8,
    color: 'black',
  },
  btn: {
    position: 'absolute',
    width: '80%',
    height: '8%',
    backgroundColor: '#FFCD61',
    borderRadius: 6,
    top: '66.5%',
    left: '10%',
  },
  btnText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '6%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});
