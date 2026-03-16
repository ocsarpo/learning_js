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
 * 콜백함수: 다른함수의 매개변수로 사용되는 함수.
 */
function first(callback) {
    console.log('first');
    callback();
}

first(function () {
    console.log('second');
})

function second() {
    console.log('second');
}
first(second);

first(second()); // second()가 먼저 실행되고 그 반환값을 first에 전달함. 콜백아님 주의!

/**
 * 비동기 순서제어. 철수 -> 영희 -> 민수 순서로 실행되도록.
 */
let sec2 = 1000;
function receiveA() {
    console.log("철수 하이");
}

function receiveB(callback) {
    setTimeout(function () {
        console.log("영희 하이");
        callback();
    }, sec2)
}

function receiveC() {
    console.log("민수 하이");
}

receiveA();
receiveB(receiveC);
console.log("끝"); // 비동기 함수가 실행되는 동안 다른 코드들이 실행됨. -> 콜백함수를 사용해야 순서제어가 가능.

