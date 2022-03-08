import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    width: '100%',
    backgroundColor: 'white',
    position: 'relative',
    flexGrow: 1,
  },
  title: {
    textAlign: 'center',
    paddingTop: '5%',
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
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
    color: 'black',
    paddingHorizontal: '3%',
  },
});
