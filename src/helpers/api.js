import axios from "axios";
import { baseURL, cloudApi } from "./constants";

// Create an instance for axios with headers for authorization
const createInstance = token => {
  return axios.create({
    baseURL,
    headers: {
      Authorization: `OAuth ${token}`
    }
  });
};

// Get all files in the disk using token and path provided
export const getFiles = async (token, path) => {
  const instance = createInstance(token);
  const limitFiles = 100;
  const { data } = await instance.get(
    `${cloudApi}?path=${path}&limit=${limitFiles}`
  );
  return data._embedded;
};
