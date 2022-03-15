import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    width: '100%',
    backgroundcolor: '#fff',
    position: 'relative',
    flexGrow: 1,
  },
  title: {
    textAlign: 'center',
    paddingTop: '5%',
    fontSize: 25,
    fontWeight: '700',
    color: '#000',
  },
  subTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '55%',
    marginLeft: '40%',
    marginVertical: '5%',
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
  },
  card: {
    width: '90%',
    height: 140,
    marginHorizontal: '5%',
    marginVertical: '5%',
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
  },
  img: {
    width: '35%',
    height: '100%',
    borderRadius: 12,
  },
  desc: {
    display: 'flex',
    flexDirection: 'column',
    width: '54%',
    color: '#000',
    paddingHorizontal: '3%',
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
