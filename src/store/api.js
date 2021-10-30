import axios from 'axios';

const fetchData = (method, url, params, data) => {
  return axios({
    baseURL: "",
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

const finishTask = (taskId, userId) => {
  return fetchData('POST', '/task/finish', { taskId: taskId, userId: userId });
};

const API = {
  login,
  getTasks,
  finishTask
};

export default API;
