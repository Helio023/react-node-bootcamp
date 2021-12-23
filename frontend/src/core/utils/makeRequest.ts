import axios, { Method } from 'axios';

type ReqParams = {
  method?: Method;
  url: string;
  data?: object;
  params?: object;
};

const BASE_URL = 'htpp://localhost:3000/api/v1/catalog'

export const makeRequest = ({ method = 'GET', url, data, params }: ReqParams) => {
  return axios({
    method,
    url: `${BASE_URL}${url}`,
    data,
    params,
  });
};


