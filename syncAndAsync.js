// 비동기 지원 함수.
let sec = 1000;
setTimeout(function () {
    console.log(`${sec}초 뒤 코드 실행`);
}, sec)

function receiveA() {
    console.log("철수 하이");
}

function receiveB() {
    setTimeout(function () {
        console.log("영희 하이");
    }, sec)
}

function receiveC() {
    console.log("민수 하이");
}

receiveA()
receiveB()
receiveC()

/**
 * 콜백.
 */
