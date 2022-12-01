// 리다이렉트될 화면
// KakaoRedirectHandeler.js

import { getToken, getKakaoUserEmail } from '../utils/kakaoLogin';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KakaoRedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get('code'); // 인가코드 받는 부분
    console.log('code :>> ', code);

    (async () => {
      const accessToken = await getToken(code);
      console.log('accessToken :>> ', accessToken);

      const email = await getKakaoUserEmail(accessToken);
      console.log('email :>> ', email);

      navigate('/');
    })();
  }, []);

  return (
    <div>
      사실 이페이지는 크게 의미 없다. 첫화면으로 로직이 끝나면 이동시켜주면
      된다.
    </div>
  );
};

export default KakaoRedirectHandler;
