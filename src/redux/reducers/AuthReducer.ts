const initialState = {
  accessToken: '',
  client: '',
  uid: '',
};

const AuthReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_CREDENTIALS':
      return {
        ...state,
        accessToken: action.payload.accessToken,
        client: action.payload.client,
        uid: action.payload.uid,
      };

    default: break;
  }
  return state;
};

export default AuthReducer;
