/**
 * Browser Object Model.
 */

// window 객체. -> 전역 객체.
// 브라우저 환경에서만 사용 가능.
console.log(window);

// Windoe.open() : 새로운 창을 염.
function exec() {
    // window.open("https://www.google.com");

    // 두번째 값은 key 역할이라 같은 key 의 창이 열려있으면 열지않음.
    // ? 그냥 막 열리는디? -> 사이트 정책마다 될 수도 안될수도 있음.
    // window.open("https://www.google.com", "google"); // 안됨
    window.open("https://web.humoruniv.com/main.html", "humoruniv"); // 됨

    // 세번째 값은 옵션. 
    // window.open("https://web.humoruniv.com/main.html", "humoruniv", "width=500, height=500");
}

let num = 0;
let intervalId = null;

function start() {
    intervalId = setInterval(() => {
        console.log(num++);
    }, 1000);
}

function stop() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        num = 0;
    }
}

/**
 * location 객체
 * 웹 브라우저의 주소와 관련된 기능이 구현되어져 있는 객체.
 */
console.log(location);
console.log(location.href); // 현재 페이지의 주소
console.log(location.hostname); // 현재 페이지의 도메인
console.log(location.port); // 현재 페이지의 포트
console.log(location.protocol); // 현재 페이지의 프로토콜
console.log(location.pathname); // 현재 페이지의 경로
console.log(location.search); // 현재 페이지의 쿼리 스트링
console.log(location.hash); // 현재 페이지의 해시

// location.href = "https://www.google.com"; // 페이지 이동
// location.reload(); // 페이지 새로고침

/**
 * screen 객체.
 * 모니터와 관련된 정보 제공객체.
 */
console.log(screen);
console.log(screen.width); // 모니터의 너비
console.log(screen.height); // 모니터의 높이
console.log(screen.availWidth); // 모니터의 너비 (작업 표시줄 제외)
console.log(screen.availHeight); // 모니터의 높이 (작업 표시줄 제외)
console.log(screen.colorDepth); // 모니터의 색상 깊이
console.log(screen.pixelDepth); // 모니터의 픽셀 깊이

/**
 * history 객체.
 * 웹 브라우저 히스토리와 관련된 기능
 */
console.log(history);
console.log(history.length); // 히스토리의 길이
// console.log(history.back()); // 이전 페이지로 이동
// console.log(history.forward()); // 다음 페이지로 이동
// console.log(history.go(1)); // 1 페이지 앞으로 이동
// console.log(history.go(-1)); // 1 페이지 뒤로 이동

/**
 * navigator 객체.
 * 브라우저와 운영체제에 대한 정보 제공 객체.
 */
console.log(navigator);
console.log(navigator.userAgent); // 브라우저 정보
console.log(navigator.platform); // 운영체제 정보
console.log(navigator.language); // 언어
console.log(navigator.cookieEnabled); // 쿠키 사용 여부
console.log(navigator.onLine); // 온라인 여부
console.log(navigator.appName); // 브라우저 이름
console.log(navigator.appVersion); // 브라우저 버전
console.log(navigator.vendor); // 브라우저 벤더
console.log(navigator.product); // 브라우저 제품
