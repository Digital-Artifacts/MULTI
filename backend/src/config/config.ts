import { AxiosRequestConfig } from 'axios';

export const headers = (): AxiosRequestConfig => {
  return {
    headers: {
      Authorization: 'Bearer ' + process.env.LIVEPEER_API_KEY,
    },
  };
};
