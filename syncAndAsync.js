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

/**
 * 콜백 지옥.
 */
function counter(n, callback) {
    setTimeout(function () {
        console.log(n);
        callback();
    }, 1000)
}

counter(1, function () {
    counter(2, function () {
        counter(3, function () {
            counter(4, function () {
                counter(5, function () {
                    console.log("끝");
                })
            })
        })
    })
})

/**
 * promise - 1.
 */
new Promise((resolve, reject) => {
    // 비동기 로직. (처리 예정인 코드 작성.)
    /**
     * 1. 대기 (pending)
     * 2. 성공 (fulfilled) 이행상태.
     * 3. 실패 (rejected) 거부상태.
     */

    // 대기상태.
    console.log('code running. . . .');

    // 성공.
    resolve('하이룽');

    // 실패. resolve와 reject는 한 번만 호출됨. 위에서 resolve가 호출되었으므로 reject는 무시됨.
    reject(new Error('에라다'));
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})

new Promise((resolve, reject) => {
    // 비동기 로직. (처리 예정인 코드 작성.)
    /**
     * 1. 대기 (pending)
     * 2. 성공 (fulfilled) 이행상태.
     * 3. 실패 (rejected) 거부상태.
     */

    // 대기상태.
    console.log('code running. . . .');

    // 실패.
    reject(new Error('에라다'));

    // 성공. 실패가 호출되서 resolve 호출안됨.
    resolve('하이룽');
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error.message);
    console.log(error);
})
console.log('끝');

/**
 * promise chaining.
 */
function first(num) {
    return new Promise((resolve, reject) => {
        console.log('first', num);
        resolve(num + 1);
    })
}

function second(num) {
    return new Promise((resolve, reject) => {
        console.log('second', num);
        resolve(num + 1);
    })
}

function third(num) {
    return new Promise((resolve, reject) => {
        console.log('third', num);
        resolve(num + 1);
    })
}

// chaining. .then()을 반환(return)하면 다음 .then()에서 그 값을 받을 수 있음.
first(1).then((num) => {
    return second(num);
}).then((num) => {
    return third(num);
}).then((num) => {
    console.log(num);
    console.log('끝');
})

/**
 * promise 활용.
 * 콜백지옥을 promise로 해결.
 */
function counter(n) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (n > 5) {
                reject(new Error('5보다 클 수 없음'));
            } else {
                console.log(n);
                resolve(n + 1);
            }
        }, 500)
    });
}

// 가독성 비교해보삼.
counter(0).then((num) => {
    return counter(num);
}).then((num) => {
    return counter(num);
}).then((num) => {
    return counter(num);
}).then((num) => {
    return counter(num);
}).then((num) => {
    return counter(num);
}).then((num) => {
    return counter(num);
}).catch((error) => {
    console.log(error.message);
});

// resolve 함수 호출 시 매개변수랑 then에서 호출하는 함수의 매개변수는 같으면 축약 가능.
counter(0).then(counter).then(counter).then(counter).then(counter).then(counter).catch((error) => {
    console.log(error.message);
});