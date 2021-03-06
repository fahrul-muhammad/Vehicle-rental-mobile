import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'relative',
    minHeight: '100%',
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
  camera: {
    width: 200,
    height: 45,
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
  },
  radio: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    width: '90%',
    height: '5%',
    marginLeft: '5%',
    marginTop: '2%',
    alignItems: 'center',
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
    marginTop: '1%',
    borderRadius: 10,
    borderWidth: 1,
  },
  btn: {
    backgroundColor: '#FFCD61',
    width: '90%',
    marginLeft: '5%',
    height: '8%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    bottom: '2%',
  },
  radioBtn: {
    width: 24,
    height: 24,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelRadio: {
    paddingLeft: '2%',
    marginRight: '5%',
  },
  dot: {
    backgroundColor: '#FFCD61',
    width: '70%',
    height: '70%',
    borderRadius: 50,
  },
  date: {
    width: '90%',
    height: '10%',
    marginLeft: '5%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '5%',
  },
});
