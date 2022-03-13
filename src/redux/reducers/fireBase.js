const initialState = {
  fireBase: '',
};

const fireBaseToken = (state = initialState, aciton) => {
  switch (aciton.type) {
    case 'SET_FIREBASE_TOKEN_FULFILLED':
      return {
        ...state,
        token: aciton.payload,
      };

    default:
      return state;
  }
};

export default fireBaseToken;
