import axios from 'axios';

export const BASE_API_URL = 'https://todoapp-server-mhay.onrender.com';

export const API_URL = 'https://todoapp-server-mhay.onrender.com/api/todos';

export const getTodos = () => axios.get(API_URL);
export const createTodo = (todo) => axios.post(API_URL, todo);
export const updateTodo = (id, todo) => axios.put(`${API_URL}/${id}`, todo);
export const deleteTodo = (id) => axios.delete(`${API_URL}/${id}`);
