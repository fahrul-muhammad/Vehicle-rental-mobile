import PushNotification from 'react-native-push-notification';

export const sendLocalNotification = ({title, message, date}) => {
  PushNotification.localNotification({
    channelId: '123',
    title,
    message,
    actions: ['Dismiss', 'Yes'],
  });
};
