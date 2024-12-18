import axios from 'axios';

// Set base URL for all Axios requests
const apiClient = axios.create({
  baseURL: 'http://localhost:8000', // Replace with your FastAPI backend URL
});

// Add Authorization header
apiClient.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

export default apiClient;
