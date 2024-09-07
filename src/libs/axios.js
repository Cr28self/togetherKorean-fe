import axios from 'axios';
import {
  getItemFromLocalStorage,
  setLocalStorageItem,
} from '../utils/crud-localstorage.js';
import { TOKEN_DATA_KEY } from '../constant/auth/storage-token-key.const.js';

//개발 환경에 따라 바뀜 (env.local (로컬환경에서 사용) / env.production( 배포환경에서 사용 ) )
const Baseurl = import.meta.env.VITE_REACT_BASEURL;

//Axios Instance 설정
const apiClient = axios.create({
  // withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  baseURL: Baseurl, // baseURL 설정
});

// axios Interceptors를 이용해서 토큰이 만료되면 토큰 재발행
// 아직 제대로 동작 안되는듯?
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const accessToken = getItemFromLocalStorage(TOKEN_DATA_KEY).accessToken;
      const refreshToken = getItemFromLocalStorage(TOKEN_DATA_KEY).refreshToken;
      return axios
        .post('/member/reissue', {
          accessToken: accessToken,
          refreshToken: refreshToken,
        })
        .then((res) => {
          if (res.status === 200) {
            setLocalStorageItem(TOKEN_DATA_KEY, res.data);

            return apiClient(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  },
);

export { apiClient };
