import axios from 'axios';
import { baseURL, cloudApi } from '../constants';

const createInstance = (token) => {
  return axios.create({
    baseURL,
    headers: {
      Authorization: `OAuth ${token}`
    }
  });
};

export const getFiles = async (token) => {
  const instance = createInstance(token)

    const { data } = await instance.get(cloudApi)
    return data;
}


// export const getDiskData = async () => {
//   try {
//     const res = await createInstance.get('/authorize')
//     return res.data
//   } catch (error) {
//     console.error(error)
//   }
// }
