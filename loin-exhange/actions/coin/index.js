import { axiosInstance, handleSuccess, handleError } from '../index';

export const getCoinMarkets = async data => {
  return axiosInstance
    .get('/coins/markets', { params : data })
    .then(handleSuccess)
    .catch(handleError);
};

export const getCoinDetail = async id => {
  return axiosInstance
    .get('/coins/' + id)
    .then(handleSuccess)
    .catch(handleError);
};


export const getCoinMarket = async data => {
  return axiosInstance
    .get('/coins/markets', { params : data })
    .then(handleSuccess)
    .catch(handleError);
};
  

  