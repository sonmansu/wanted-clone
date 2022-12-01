import axios from 'axios';
import { KAKAO_CLIENT_ID } from '../utils/credentials';

const REDIRECT_URI = 'http://localhost:3000/kakaoLogin';
const GRANT_TYPE = 'authorization_code';

// 프런트엔드 리다이랙트 URI 예시
// const REDIRECT_URI =  "http://localhost:3000/oauth/callback/kakao";

// 백엔드 리다이랙트 URI 예시
// const REDIRECT_URI =  "http://localhost:5000/kakao/code";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;


export const getToken = async (code) => {
    try {
        const result = await axios({
            method: "POST",
            url: `https://kauth.kakao.com/oauth/token?grant_type=${GRANT_TYPE}&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`,
            headers: {
                "content-type": "application/x-www-form-urlencoded",
            },
        });
        console.log('result', result)
        const accessToken = result.data.access_token;
        // localStorage.setItem('accessToken', accessToken);

        return accessToken
    } catch (err) {
        console.log(err.data);
    }
};

export const getKakaoUserEmail = async (accessToken) => {
    try {
        const result = await axios({
            method: "GET",
            url: `https://kapi.kakao.com/v2/user/me?secure_resourse=true`,
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-type':
                    'application/x-www-form-urlencoded;charset=utf-8',
            },
        });
        console.log('result :>>', result);
        const email = result.data.kakao_account.email;
        // console.log('email :>> ', email);
        return email;
    } catch (err) {
        console.log(err.data);
    }
};