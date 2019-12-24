import { NEW_COMPANY } from '../constant/company';

export const newCompany = data => {
  return {
    type: NEW_COMPANY,
    payload: data
  };
};
