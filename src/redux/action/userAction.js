import { NEW_USER } from '../constant/user';

export const newUser = data => {
  return {
    type: NEW_USER,
    payload: data
  };
};
