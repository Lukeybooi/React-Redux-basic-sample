import { NEW_USER } from '../constant/user';

const initialState = {
  id: null,
  username: null,
  gender: null,
  email: null
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case NEW_USER:
      return payload;
    default:
      return state;
  }
};
