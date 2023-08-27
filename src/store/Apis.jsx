// api.js
import axios from "axios";

const API_BASE_URL = "https://fakestoreapi.com/"; // Replace with your API base URL

export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const insertData = async (endpoint, data) => {
  try {
    await axios.post(`${API_BASE_URL}${endpoint}`, data);
  } catch (error) {
    throw error;
  }
};

export const updateData = async (endpoint, index, data) => {
  try {
    await axios.put(`${API_BASE_URL}${endpoint}/${index}`, data);
  } catch (error) {
    throw error;
  }
};

export const deleteData = async (endpoint, index) => {
  try {
    await axios.delete(`${API_BASE_URL}${endpoint}/${index}`);
  } catch (error) {
    throw error;
  }
};
