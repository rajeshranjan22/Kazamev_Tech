import axios from 'axios';

const BASE_URL = 'http://localhost:3001'; // Replace with actual backend later

export const fetchAllTasks = async () => {
    const res = await axios.get(`${BASE_URL}/fetchAllTasks`);
    return res.data;
};

export const addTask = async (note) => {
    const res = await axios.post(`${BASE_URL}/add`, { note });
    return res.data;
};
