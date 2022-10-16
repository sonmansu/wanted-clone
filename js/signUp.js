/** 로그인 모달창 열고 닫기 */
const $loginBtn = document.querySelector('.login-btn');
const $loginModal = document.querySelector('#login-modal');
const $loginModalCloseBtn = document.querySelector('.login-modal__close-btn');

const $loginModalEmailLoginBtn = document.querySelector('.login-modal__email-login-btn');
const $sinUpModalBody = document.querySelector('.signUp-modal-body');
const $loginModalBody = document.querySelector('.login-modal-body');


const HIDDEN_CLASSNAME = 'hidden';
const MODAL_WINDOW_CLASSNAME = 'login-modal-window';

$loginBtn.addEventListener('click', e => {
    $loginModal.classList.remove(HIDDEN_CLASSNAME);
});

$loginModal.addEventListener('click', e => {
    const eventTarget = e.target;
    console.log(eventTarget.classList);
    // console.dir(eventTarget.classList);
    if (eventTarget.classList.contains(MODAL_WINDOW_CLASSNAME) && !$loginModalBody.classList.contains(HIDDEN_CLASSNAME)) {
        $loginModal.classList.add(HIDDEN_CLASSNAME);

    }
});
$loginModalCloseBtn.addEventListener('click', e => {
    console.dir(e);
    $loginModal.classList.add(HIDDEN_CLASSNAME);

    if ($sinUpModalBody.classList.contains(HIDDEN_CLASSNAME)) {
        $loginModal.classList.add(HIDDEN_CLASSNAME);
    } else {
        const cancel = confirm('회원가입을 취소하시겠습니까?');
        console.log(cancel);
        if (!cancel) {
            e.preventDefault(); // todo) 창이 안꺼져야 되는데 꺼짐
        } else {
            $sinUpModalBody.classList.add(HIDDEN_CLASSNAME);
            $signUpTitle.classList.add(HIDDEN_CLASSNAME);

            $loginModalBody.classList.remove(HIDDEN_CLASSNAME);
            $logoIcon.classList.remove(HIDDEN_CLASSNAME);
        }
    }
})

/* 이메일로 계속하기 버튼 */
const $logoIcon = document.querySelector('.login-modal-header .icon-logo-box');
const $signUpTitle = document.querySelector('.login-modal-header .login-modal__signUp-title');

$loginModalEmailLoginBtn.addEventListener('click', e => {
    $sinUpModalBody.classList.remove(HIDDEN_CLASSNAME);
    $signUpTitle.classList.remove(HIDDEN_CLASSNAME);

    $loginModalBody.classList.add(HIDDEN_CLASSNAME);
    $logoIcon.classList.add(HIDDEN_CLASSNAME);
});


/* 회원가입 모달창 */
/* 휴대폰 번호 입력 & 인증번호 받기 버튼 활성화 */
const $phoneNumberInput = document.querySelector('#phone-number-input');
const $getCodeBtn = document.querySelector('.login-modal__get-code-btn');

$phoneNumberInput.addEventListener('input', e => {
    const phoneNumber = e.target.value;
    if (phoneNumber.length >= 11) {
        $getCodeBtn.classList.add('isActive');
    } else {
        $getCodeBtn.classList.remove('isActive')
    }
})
