import { axiosInstance, handleSuccess, handleError } from '../index';

export const getCoinMarkets = async data => {
    return axiosInstance
      .get('/coins/markets', { params : data })
      .then(handleSuccess)
      .catch(handleError);
  };
  

  