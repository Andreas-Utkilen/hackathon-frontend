import axios from 'axios';

const fetchData = (method, url, params, data) => {
  return axios({
    baseURL: "http://172.20.10.2:3000",
    method: method,
    url: url,
    params: params,
    data: data
  })
  .then(res => res.data);
};

const login = (username, password) => {
  return fetchData('POST', '/login', null, { 
    username: username,
    password: password
  });
};

const getTasks = (userId) => {
  return fetchData('GET', '/tasks', { userId: userId });
};

const updateTask = (taskId, status) => {
  return fetchData('POST', '/tasks/update', null, { taskId: taskId, status: status });
};

const API = {
  login,
  getTasks,
  updateTask
};

export default API;
