import PushNotification from 'react-native-push-notification';
import axios from 'axios';

export const sendLocalNotification = ({title, message}) => {
  PushNotification.localNotification({
    channelId: '123',
    title,
    message,
  });
};

export const sendRemoteNotification = body => {
  const URL = `http://192.168.1.6:8000/notif/send `;
  return axios.post(URL, body);
};
