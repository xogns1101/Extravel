import { NAVER_AUTH_URI } from './Naver-config';

const clientHostName = window.location.hostname;

let backEndHostName;

if (clientHostName === 'localhost') {
  //
  backEndHostName = 'http://localhost:8181';
} else if (clientHostName === 'spring.com') {
  //
  backEndHostName = 'https://api.spring.com';
}

export const API_BASE_URL = backEndHostName;
export const USER = '/api/auth';
