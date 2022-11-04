import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/loginModal.css';

const LoginModal = () => {
  return (
    <div id="login-modal" class="login-modal-window hidden">
      {/* <!-- <div id="login-modal" class="login-modal-window"> --> */}
      <div class="login-modal-box">
        <div class="login-modal-header">
          <div class="icon-logo-box">
            <i class="icon-logo logo-align-center"></i>
          </div>
          <span class="login-modal__signUp-title hidden">회원가입</span>
          <button class="login-modal__close-btn">
            <span class="material-icons-round">close</span>
          </button>
        </div>
        <div class="login-modal-body">
          {/* <!-- <div class="login-modal-body" style="display: none;"> --> */}
          <h1 class="login-modal__title">
            직장인을 위한
            <br />
            커리어 플랫폼, 원티드!
          </h1>
          <h2 class="login-modal__subtitle">
            커리어 성장과 행복을 위한 여정
            <br /> 지금 원티드에서 시작하세요.
          </h2>
          {/* <!-- <div> --> */}
          <label class="login-modal__input__text">
            이메일
            <div class="login-modal__input-wrap">
              <input
                type="email"
                class="login-modal__input"
                placeholder="이메일을 입력해 주세요."
                autofocus
              />
            </div>
          </label>
          {/* <!-- </div> --> */}
          <button class="login-modal__email-login-btn">
            <span class="material-icons-round">mail_outline</span>
            <span class="login-modal__email-login-btn__text">
              이메일로 계속하기
            </span>
          </button>
          <div class="login-modal__or-divider">or</div>
          <div class="login-modal__sns-login-text">다음 계정으로 계속하기</div>
          <div class="login-modal-sns-list-box">
            <button class="login-modal__sns-btn login-modal__sns-btn--bg-yellow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="21"
                viewBox="0 0 22 21"
              >
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M11 0C5.242 0 0 3.823 0 8.539c0 2.932 1.904 5.519 4.804 7.056l-1.22 4.479c-.107.397.343.712.69.483l5.348-3.548c.452.044.91.069 1.377.069 6.076 0 11-3.823 11-8.54 0-4.715-4.924-8.538-11-8.538"
                ></path>
              </svg>
              <p class="login-modal__sns-btn__text">Kakao</p>
            </button>
            <button class="login-modal__sns-btn login-modal__sns-btn--bg-blue">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="23"
                viewBox="0 0 12 23"
              >
                <path
                  fill="#fff"
                  fill-rule="nonzero"
                  d="M11.214 12.603l.622-4.055h-3.89V5.917c0-1.11.543-2.191 2.285-2.191H12V.274S10.395 0 8.86 0C5.656 0 3.562 1.942 3.562 5.458v3.09H0v4.055h3.562v9.802c.714.112 1.446.17 2.191.17.746 0 1.478-.058 2.192-.17v-9.802h3.269"
                ></path>
              </svg>
              <p class="login-modal__sns-btn__text">Facebook</p>
            </button>
            <button class="login-modal__sns-btn login-modal__sns-btn--border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 23 23"
              >
                <g fill="none" fill-rule="nonzero">
                  <path
                    fill="#EA4335"
                    d="M11.5 4.574c1.688 0 3.204.58 4.396 1.72l3.299-3.299C17.203 1.14 14.6 0 11.5 0 7.005 0 3.115 2.577 1.223 6.335l3.842 2.98c.905-2.718 3.44-4.741 6.435-4.741z"
                  ></path>
                  <path
                    fill="#4285F4"
                    d="M22.54 11.761c0-.815-.073-1.6-.21-2.352H11.5v4.448h6.19c-.268 1.438-1.078 2.656-2.296 3.471v2.886h3.717c2.174-2.002 3.429-4.95 3.429-8.453z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M5.065 13.685c-.23-.69-.36-1.427-.36-2.185s.13-1.495.36-2.185v-2.98H1.223C.444 7.888 0 9.645 0 11.5c0 1.856.444 3.612 1.223 5.165l3.842-2.98z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M11.5 23c3.105 0 5.708-1.03 7.61-2.786l-3.716-2.886c-1.03.69-2.347 1.098-3.894 1.098-2.995 0-5.53-2.023-6.435-4.741H1.223v2.98C3.115 20.423 7.005 23 11.5 23z"
                  ></path>
                  <path d="M0 0L23 0 23 23 0 23z"></path>
                </g>
              </svg>
              <p class="login-modal__sns-btn__text">Google</p>
            </button>
            <button class="login-modal__sns-btn login-modal__sns-btn--bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="24"
                viewBox="0 0 19 24"
              >
                <path
                  fill="#fff"
                  fill-rule="nonzero"
                  d="M15.868 12.55c.033 3.574 3.098 4.764 3.132 4.779-.026.084-.49 1.695-1.615 3.36-.972 1.439-1.982 2.872-3.572 2.902-1.562.03-2.065-.938-3.851-.938s-2.344.908-3.823.967c-1.535.059-2.704-1.556-3.684-2.99C.45 17.698-1.08 12.343.975 8.73c1.022-1.795 2.848-2.932 4.83-2.96 1.506-.03 2.929 1.026 3.85 1.026.921 0 2.65-1.27 4.467-1.083.761.032 2.897.31 4.268 2.343-.11.07-2.548 1.506-2.522 4.494m-2.936-8.777c.815-.999 1.363-2.389 1.213-3.772-1.174.048-2.594.792-3.437 1.79-.755.884-1.416 2.298-1.238 3.654 1.31.103 2.647-.673 3.462-1.672"
                ></path>
              </svg>
              <p class="login-modal__sns-btn__text">Apple</p>
            </button>
          </div>
          <p class="login-modal__safe-text">
            걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.
            <br />
            회원가입 시<Link>개인정보 처리방침</Link>과<Link>이용약관</Link>을
            확인하였으며, 동의합니다.
          </p>
        </div>

        <div class="signUp-modal-body hidden">
          <div class="login-modal-input-box">
            <label class="login-modal__input__text">
              이름
              <div class="login-modal__input-wrap">
                <input
                  type="text"
                  class="login-modal__input"
                  placeholder="이름을 입력해 주세요."
                  autofocus
                />
              </div>
            </label>
          </div>
          <div class="login-modal-input-box">
            <label class="login-modal__input__text">휴대폰 번호</label>
            <div class="login-modal__select-box">
              <div class="login-modal__input-wrap">
                <select class="login-modal__input">
                  <option value="+82">+82 South Korea</option>
                  <option value="+81">+81 Japan</option>
                  <option value="+886">+886 Taiwan</option>
                  <option value="+852">+852 Hong Kong</option>
                  <option value="+65">+65 Singapore</option>
                  <option value="+93">+93 Afghanistan</option>
                  <option value="+355">+355 Albania</option>
                  <option value="+213">+213 Algeria</option>
                  <option value="+244">+244 Angola</option>
                  <option value="+54">+54 Argentina</option>
                  <option value="+374">+374 Armenia</option>
                  <option value="+297">+297 Aruba</option>
                  <option value="+61">+61 Australia</option>
                  <option value="+43">+43 Austria</option>
                  <option value="+994">+994 Azerbaijan</option>
                  <option value="+973">+973 Bahrain</option>
                  <option value="+880">+880 Bangladesh</option>
                  <option value="+375">+375 Belarus</option>
                  <option value="+32">+32 Belgium</option>
                  <option value="+501">+501 Belize</option>
                  <option value="+229">+229 Benin</option>
                  <option value="+975">+975 Bhutan</option>
                  <option value="+591">+591 Bolivia</option>
                  <option value="+267">+267 Botswana</option>
                  <option value="+55">+55 Brazil</option>
                  <option value="+673">+673 Brunei</option>
                  <option value="+359">+359 Bulgaria</option>
                  <option value="+226">+226 Burkina Faso</option>
                  <option value="+855">+855 Cambodia</option>
                  <option value="+237">+237 Cameroon</option>
                  <option value=" +1"> +1 Canada</option>
                  <option value="+56">+56 Chile</option>
                  <option value="+86">+86 China</option>
                  <option value="+61">+61 Christmas Island</option>
                  <option value="+61">+61 Cocos Islands</option>
                  <option value="+57">+57 Colombia</option>
                  <option value="+269">+269 Comoros</option>
                  <option value="+506">+506 Costa Rica</option>
                  <option value="+385">+385 Croatia</option>
                  <option value="+53">+53 Cuba</option>
                  <option value="+599">+599 Curacao</option>
                  <option value="+357">+357 Cyprus</option>
                  <option value="+420">+420 Czech Republic</option>
                  <option value="+45">+45 Denmark</option>
                  <option value="+253">+253 Djibouti</option>
                  <option value="+593">+593 Ecuador</option>
                  <option value="+20">+20 Egypt</option>
                  <option value="+503">+503 El Salvador</option>
                  <option value="+240">+240 Equatorial Guinea</option>
                  <option value="+372">+372 Estonia</option>
                  <option value="+251">+251 Ethiopia</option>
                  <option value="+298">+298 Faroe Islands</option>
                  <option value="+679">+679 Fiji</option>
                  <option value="+358">+358 Finland</option>
                  <option value="+33">+33 France</option>
                  <option value="+689">+689 French Polynesia</option>
                  <option value="+220">+220 Gambia</option>
                  <option value="+995">+995 Georgia</option>
                  <option value="+49">+49 Germany</option>
                  <option value="+233">+233 Ghana</option>
                  <option value="+30">+30 Greece</option>
                  <option value="+299">+299 Greenland</option>
                  <option value="+502">+502 Guatemala</option>
                  <option value="+224">+224 Guinea</option>
                  <option value="+592">+592 Guyana</option>
                  <option value="+509">+509 Haiti</option>
                  <option value="+504">+504 Honduras</option>
                  <option value="+36">+36 Hungary</option>
                  <option value="+354">+354 Iceland</option>
                  <option value="+91">+91 India</option>
                  <option value="+62">+62 Indonesia</option>
                  <option value="+98">+98 Iran</option>
                  <option value="+964">+964 Iraq</option>
                  <option value="+353">+353 Ireland</option>
                  <option value="+972">+972 Israel</option>
                  <option value="+39">+39 Italy</option>
                  <option value="+962">+962 Jordan</option>
                  <option value="+7">+7 Kazakhstan</option>
                  <option value="+254">+254 Kenya</option>
                  <option value="+383">+383 Kosovo</option>
                  <option value="+965">+965 Kuwait</option>
                  <option value="+996">+996 Kyrgyzstan</option>
                  <option value="+856">+856 Laos</option>
                  <option value="+371">+371 Latvia</option>
                  <option value="+961">+961 Lebanon</option>
                  <option value="+218">+218 Libya</option>
                  <option value="+423">+423 Liechtenstein</option>
                  <option value="+370">+370 Lithuania</option>
                  <option value="+352">+352 Luxembourg</option>
                  <option value="+853">+853 Macau</option>
                  <option value="+389">+389 Macedonia</option>
                  <option value="+261">+261 Madagascar</option>
                  <option value="+265">+265 Malawi</option>
                  <option value="+60">+60 Malaysia</option>
                  <option value="+960">+960 Maldives</option>
                  <option value="+223">+223 Mali</option>
                  <option value="+356">+356 Malta</option>
                  <option value="+692">+692 Marshall Islands</option>
                  <option value="+222">+222 Mauritania</option>
                  <option value="+230">+230 Mauritius</option>
                  <option value="+52">+52 Mexico</option>
                  <option value="+373">+373 Moldova</option>
                  <option value="+976">+976 Mongolia</option>
                  <option value="+382">+382 Montenegro</option>
                  <option value="+212">+212 Morocco</option>
                  <option value="+258">+258 Mozambique</option>
                  <option value="+95">+95 Myanmar</option>
                  <option value="+264">+264 Namibia</option>
                  <option value="+977">+977 Nepal</option>
                  <option value="+31">+31 Netherlands</option>
                  <option value="+687">+687 New Caledonia</option>
                  <option value="+64">+64 New Zealand</option>
                  <option value="+505">+505 Nicaragua</option>
                  <option value="+227">+227 Niger</option>
                  <option value="+234">+234 Nigeria</option>
                  <option value="+47">+47 Norway</option>
                  <option value="+968">+968 Oman</option>
                  <option value="+92">+92 Pakistan</option>
                  <option value="+680">+680 Palau</option>
                  <option value="+970">+970 Palestine</option>
                  <option value="+507">+507 Panama</option>
                  <option value="+675">+675 Papua New Guinea</option>
                  <option value="+595">+595 Paraguay</option>
                  <option value="+51">+51 Peru</option>
                  <option value="+63">+63 Philippines</option>
                  <option value="+48">+48 Poland</option>
                  <option value="+351">+351 Portugal</option>
                  <option value="+974">+974 Qatar</option>
                  <option value="+262">+262 Reunion</option>
                  <option value="+40">+40 Romania</option>
                  <option value="+7">+7 Russia</option>
                  <option value="+250">+250 Rwanda</option>
                  <option value="+685">+685 Samoa</option>
                  <option value="+966">+966 Saudi Arabia</option>
                  <option value="+221">+221 Senegal</option>
                  <option value="+381">+381 Serbia</option>
                  <option value="+248">+248 Seychelles</option>
                  <option value="+232">+232 Sierra Leone</option>
                  <option value="+421">+421 Slovakia</option>
                  <option value="+386">+386 Slovenia</option>
                  <option value="+677">+677 Solomon Islands</option>
                  <option value="+252">+252 Somalia</option>
                  <option value="+27">+27 South Africa</option>
                  <option value="+211">+211 South Sudan</option>
                  <option value="+34">+34 Spain</option>
                  <option value="+94">+94 Sri Lanka</option>
                  <option value="+249">+249 Sudan</option>
                  <option value="+597">+597 Suriname</option>
                  <option value="+46">+46 Sweden</option>
                  <option value="+41">+41 Switzerland</option>
                  <option value="+963">+963 Syria</option>
                  <option value="+992">+992 Tajikistan</option>
                  <option value="+255">+255 Tanzania</option>
                  <option value="+66">+66 Thailand</option>
                  <option value="+228">+228 Togo</option>
                  <option value="+676">+676 Tonga</option>
                  <option value="+216">+216 Tunisia</option>
                  <option value="+90">+90 Turkey</option>
                  <option value="+993">+993 Turkmenistan</option>
                  <option value="+256">+256 Uganda</option>
                  <option value="+380">+380 Ukraine</option>
                  <option value="+971">+971 United Arab Emirates</option>
                  <option value="+44">+44 United Kingdom</option>
                  <option value="+1">+1 United States</option>
                  <option value="+598">+598 Uruguay</option>
                  <option value="+998">+998 Uzbekistan</option>
                  <option value="+678">+678 Vanuatu</option>
                  <option value="+58">+58 Venezuela</option>
                  <option value="+84">+84 Vietnam</option>
                  <option value="+967">+967 Yemen</option>
                  <option value="+260">+260 Zambia</option>
                  <option value="+263">+263 Zimbabwe</option>
                </select>
              </div>
              <span class="login-modal__select-arrow-btn material-icons md-22">
                chevron_right
              </span>
            </div>
            <div class="login-modal__input-wrap login-modal__input-wrap--display">
              <input
                type="number"
                id="phone-number-input"
                class="login-modal__input"
                placeholder="(예시) 01034567890"
                autofocus
              />
              <button class="login-modal__get-code-btn">인증번호 받기</button>
            </div>
            <div class="login-modal__input-wrap">
              <input
                type="text"
                class="login-modal__input login-modal__input--bg-grey"
                placeholder="인증번호를 입력해주세요."
              />
            </div>
          </div>
          <div class="login-modal-input-box">
            <label class="login-modal__input__text">비밀번호</label>
            <div class="login-modal__input-wrap">
              <input
                type="text"
                class="login-modal__input"
                placeholder="비밀번호를 입력해주세요."
              />
            </div>
            <p class="login-modal__pw-guide">
              영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 8자 이상
              입력해 주세요.
            </p>
          </div>
          <div class="login-modal-input-box">
            <label class="login-modal__input__text">비밀번호 확인</label>
            <div class="login-modal__input-wrap">
              <input
                type="text"
                class="login-modal__input"
                placeholder="비밀번호를 다시 한번 입력해 주세요."
              />
            </div>
          </div>
          <div class="login-modal-agree-box">
            <div class="login-modal-agree-row">
              <input type="checkbox" id="agree-all" />
              <label
                class="login-modal__agree-text login-modal__agree-text--col-black"
                for="agree-all"
              >
                전체 동의
              </label>
            </div>
            <div class="divider divider--width-100 divider--margin-5"></div>
            <div class="login-modal-agree-row">
              <input type="checkbox" id="agree-privacy" />
              <div class="login-modal-agree-text-box">
                <label class="login-modal__agree-text " for="agree-privacy">
                  개인정보 수집 및 이용 동의(필수)
                </label>
                <a class="login-modal__agree-detail-link" href="#">
                  자세히
                </a>
              </div>
            </div>
            <div class="login-modal-agree-row">
              <input type="checkbox" id="agree-alarm" />
              <div class="login-modal-agree-text-box">
                <label class="login-modal__agree-text " for="agree-alarm">
                  이벤트 소식 등 알림 정보 받기
                </label>
                <a class="login-modal__agree-detail-link" href="#">
                  자세히
                </a>
              </div>
            </div>
          </div>
          <div class="login-modal-footer-box">
            <button class="login-modal__signUp-btn">회원가입하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
