import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    width: '91.5%',
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
});
