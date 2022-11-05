import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function ModalBodySignUp() {
  const checkPrivacyRef = useRef();
  const checkAlarmRef = useRef();
  const onClickAgreeAll = (e) => {
    if (e.target.checked) {
      console.log('checked');
      checkPrivacyRef.current.checked = true;
      checkAlarmRef.current.checked = true;
    } else {
      checkPrivacyRef.current.checked = false;
      checkAlarmRef.current.checked = false;
    }
  };
  return (
    <div className="signUp-modal-body">
      <div className="login-modal-input-box">
        <label className="login-modal__input__text">
          이름
          <div className="login-modal__input-wrap">
            <input
              type="text"
              className="login-modal__input"
              placeholder="이름을 입력해 주세요."
              autofocus
            />
          </div>
        </label>
      </div>
      <div className="login-modal-input-box">
        <label className="login-modal__input__text">휴대폰 번호</label>
        <div className="login-modal__select-box">
          <div className="login-modal__input-wrap">
            <select className="login-modal__input">
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
        <div className="login-modal__input-wrap login-modal__input-wrap--display">
          <input
            type="number"
            id="phone-number-input"
            className="login-modal__input"
            placeholder="(예시) 01034567890"
            autofocus
          />
          <button className="login-modal__get-code-btn">인증번호 받기</button>
        </div>
        <div className="login-modal__input-wrap">
          <input
            type="text"
            className="login-modal__input login-modal__input--bg-grey"
            placeholder="인증번호를 입력해주세요."
          />
        </div>
      </div>
      <div className="login-modal-input-box">
        <label className="login-modal__input__text">비밀번호</label>
        <div className="login-modal__input-wrap">
          <input
            type="text"
            className="login-modal__input"
            placeholder="비밀번호를 입력해주세요."
          />
        </div>
        <p className="login-modal__pw-guide">
          영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 8자 이상
          입력해 주세요.
        </p>
      </div>
      <div className="login-modal-input-box">
        <label className="login-modal__input__text">비밀번호 확인</label>
        <div className="login-modal__input-wrap">
          <input
            type="text"
            className="login-modal__input"
            placeholder="비밀번호를 다시 한번 입력해 주세요."
          />
        </div>
      </div>
      <div className="login-modal-agree-box">
        <div className="login-modal-agree-row">
          <input type="checkbox" id="agree-all" onClick={onClickAgreeAll} />
          <label
            className="login-modal__agree-text login-modal__agree-text--col-black"
            for="agree-all"
          >
            전체 동의
          </label>
        </div>
        <div className="divider divider--width-100 divider--margin-5"></div>
        <div className="login-modal-agree-row">
          <input type="checkbox" id="agree-privacy" ref={checkPrivacyRef} />
          <div className="login-modal-agree-text-box">
            <label className="login-modal__agree-text " for="agree-privacy">
              개인정보 수집 및 이용 동의(필수)
            </label>
            <Link className="login-modal__agree-detail-link">자세히</Link>
          </div>
        </div>
        <div className="login-modal-agree-row">
          <input type="checkbox" id="agree-alarm" ref={checkAlarmRef} />
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
