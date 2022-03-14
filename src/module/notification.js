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
  const URL = `${process.env.LOCAL_HOST}/notif/send `;
  return axios.post(URL, body);
};
