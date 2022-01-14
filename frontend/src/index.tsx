import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import history from './core/utils/history';

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      history.push('/admin/auth/login');
    }
    return Promise.reject(error);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
