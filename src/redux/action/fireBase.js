export const setFireBaseToken = token => {
  return {
    type: 'SET_FIREBASE_TOKEN_FULFILLED',
    payload: token,
  };
};
