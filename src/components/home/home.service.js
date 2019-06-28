import axios from 'axios';

/**
 * Function responsible for fetching the dataset(most popular NYTimes items)
 * @param {string} api 
 */
export const getMostPopularData = (api) => {
  return axios.get(api).then(resp => {
    return resp;
  }, err => {
    return err;
  });
};