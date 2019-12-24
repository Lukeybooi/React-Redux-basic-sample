import { NEW_COMPANY } from '../constant/company';

const initialState = {
  name: null,
  years: 0,
  owner: null,
  location: null
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case NEW_COMPANY:
      return payload;
    default:
      return state;
  }
};
