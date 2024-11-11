import instance from "../config/axiosConfig";

export const getDataApi = async(url, params) => {
  return instance.get(url, { params })
}

export const postDataApi = async(url, data) => {
  return instance.post(url, data);
} 

export const putDataApi = async(url, data) => {
  return instance.put(url, data);
}

export const deleteDataApi = async(url, data) => {
  return instance.delete(url, { data })
}