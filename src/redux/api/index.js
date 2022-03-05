import axios from 'axios';

const apiCall = async (url, data, headers, method) => {
  return axios({
    method,
    url: process.env.REACT_APP_APIURL + url,
    data,
    headers
  });
};

export default apiCall;
