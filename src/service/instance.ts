import axios from 'axios';

const xAppId = process.env.REACT_APP_XAPPID as string;
const xAppKey = process.env.REACT_APP_XAPPKEY as string;

const instance = axios.create({
  baseURL: 'https://trackapi.nutritionix.com/v2/',
  headers: {
    'x-app-id': xAppId,
    'x-app-key': xAppKey,
    'x-remote-user-id': 0,
  },
});

export default instance;
