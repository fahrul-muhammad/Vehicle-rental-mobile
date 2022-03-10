import PushNotification from 'react-native-push-notification';

export const successNotification = () => {
  PushNotification.localNotification({
    channelId: '123',
    title: 'Payment Success',
    message: 'Payment Success,thanks for delivery',
    bigPictureUrl: '../assets/icons/home.png',
  });
};
