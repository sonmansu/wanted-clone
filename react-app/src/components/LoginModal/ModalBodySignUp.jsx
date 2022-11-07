import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function ModalBodySignUp() {
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');

  const [isValidPw, setValidPw] = useState(false);
  const [isValidPwCheck, setValidPwCheck] = useState(false);

  // 각 체크 박스에 대한 state 변수 선언
  const [isCheckAll, setCheckAll] = useState(false);
  const [isCheckPrivacy, setCheckPrivacy] = useState(false);
  const [isCheckAlarm, setCheckAlarm] = useState(false);

  const onChangePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setValidPw(true);
    } else {
      setValidPw(false);
    }
  };
  const onChangePwCheck = (e) => {
    console.log(e.target.value);
    setPwCheck(e.target.value);
    console.log(pw, pwCheck);
    if (pw === e.target.value) {
      // pwCheck랑 비교하면 pwCheck가 아직 최신값이 저장안돼있음..!
      setValidPwCheck(true);
    } else {
      setValidPwCheck(false);
    }
  };

  // All 체크 박스 외의 체크박스들을 감시, 둘다 체크 돼있으면 All 체크박스도 체크시킴
  useEffect(() => {
    if (isCheckAlarm && isCheckPrivacy) setCheckAll(true);
    else setCheckAll(false);
  }, [isCheckAlarm, isCheckPrivacy]);

  // 각 체크 박스 클릭에 대한 이벤트 헨들러
  const onClickCheckAll = (e) => {
    if (e.target.checked) {
      setCheckAll(true);
      setCheckPrivacy(true);
      setCheckAlarm(true);
      console.log('checked');
    } else {
      setCheckAll(false);
      setCheckPrivacy(false);
      setCheckAlarm(false);
    }
  };
  const onClickCheckPrivacy = (e) => {
    setCheckPrivacy(!isCheckPrivacy);
  };
  const onClickCheckAlarm = (e) => {
    setCheckAlarm(!isCheckAlarm);
  };
  return (
    <div className="signUp-modal-body">
      <div className="login-modal-input-box">
        <label className="input__label">
          이름
          <div className="input-wrap">
            <input
              type="text"
              className="input"
              placeholder="이름을 입력해 주세요."
              autofocus
            />
          </div>
        </label>
      </div>
      <div className="login-modal-input-box">
        <label className="input__label">휴대폰 번호</label>
        <div className="login-modal__select-box">
          <div className="input-wrap">
            <select className="input">
              <option value="+82">+82 South Korea</option>
              <option value="+81">+81 Japan</option>
              <option value="+886">+886 Taiwan</option>
              <option value="+852">+852 Hong Kong</option>
            </select>
          </div>
          <span className="login-modal__select-arrow-btn material-icons md-22">
            chevron_right
          </span>
        </div>
        <div className="input-wrap login-modal__input-wrap--display">
          <input
            type="number"
            id="phone-number-input"
            className="input"
            placeholder="(예시) 01034567890"
            autofocus
          />
          <button className="login-modal__get-code-btn">인증번호 받기</button>
        </div>
        <div className="input-wrap">
          <input
            type="text"
            className="input login-modal__input--bg-grey"
            placeholder="인증번호를 입력해주세요."
          />
        </div>
      </div>
      <div className="login-modal-input-box">
        <label className="input__label">비밀번호</label>
        <div className="input-wrap">
          <input
            className="input"
            type="password"
            value={pw}
            placeholder="비밀번호를 입력해주세요."
            onChange={onChangePw}
          />
        </div>
        {pw.length > 0 && !isValidPw ? (
          <div className="input__errorMessage">
            올바르지 않은 비밀번호입니다.
          </div>
        ) : null}
        <p className="login-modal__pw-guide">
          영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 8자 이상
          입력해 주세요.
        </p>
      </div>
      <div className="login-modal-input-box">
        <label className="input__label">비밀번호 확인</label>
        <div className="input-wrap">
          <input
            className="input"
            type="password"
            value={pwCheck}
            placeholder="비밀번호를 다시 한번 입력해 주세요."
            onChange={onChangePwCheck}
          />
        </div>
        {pwCheck.length > 0 && !isValidPwCheck ? (
          <div className="input__errorMessage">
            비밀번호가 서로 일치하지 않습니다.
          </div>
        ) : null}
      </div>
      <div className="login-modal-agree-box">
        <div className="login-modal-agree-row">
          <input
            type="checkbox"
            id="agree-all"
            checked={isCheckAll}
            onClick={onClickCheckAll}
          />
          <label
            className="login-modal__agree-text login-modal__agree-text--col-black"
            for="agree-all"
          >
            전체 동의
          </label>
        </div>
        <div className="divider divider--width-100 divider--margin-5"></div>
        <div className="login-modal-agree-row">
          <input
            type="checkbox"
            id="agree-privacy"
            checked={isCheckPrivacy}
            onClick={onClickCheckPrivacy}
          />
          <div className="login-modal-agree-text-box">
            <label className="login-modal__agree-text " for="agree-privacy">
              개인정보 수집 및 이용 동의(필수)
            </label>
            <Link className="login-modal__agree-detail-link">자세히</Link>
          </div>
        </div>
        <div className="login-modal-agree-row">
          <input
            type="checkbox"
            id="agree-alarm"
            checked={isCheckAlarm}
            onClick={onClickCheckAlarm}
          />
          <div className="login-modal-agree-text-box">
            <label className="login-modal__agree-text " for="agree-alarm">
              이벤트 소식 등 알림 정보 받기
            </label>
            <Link className="login-modal__agree-detail-link">자세히</Link>
          </div>
        </div>
      </div>
      <div className="login-modal-footer-box">
        <button className="login-modal__signUp-btn">회원가입하기</button>
      </div>
    </div>
  );
}
