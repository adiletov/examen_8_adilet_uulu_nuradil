import axios from 'axios';
const axiosApi = axios.create({
    baseURL: 'https://mybaseurl.firebaseio.com',
});
export default axiosApi;