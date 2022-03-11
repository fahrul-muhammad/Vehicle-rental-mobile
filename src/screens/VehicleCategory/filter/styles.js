import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  head: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000',
  },
  btnReset: {
    backgroundColor: '#C4C4C4',
    width: '25%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  label: {
    fontSize: 20,
    fontWeight: '600',
    color: '#393939',
  },
  dropDown: {
    width: '30%',
    height: '100%',
    borderRadius: 12,
    backgroundColor: '#C4C4C4',
  },
  btn: {
    backgroundColor: '#FFCD61',
    position: 'absolute',
    bottom: '3%',
    height: 55,
    width: '90%',
    left: '5%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
});
