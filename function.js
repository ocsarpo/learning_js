/**
 * 가변인자 함수.
 */
function sum() {
    // 유사배열객체
    console.log(arguments);

    let result = 0;
    for (let value of arguments) {
        result = result + value;
    }
    console.log(result);
}

sum(10, 20);
sum(10, 20, 30, 40);
sum(10);

function sum2(...args) {
    // 배열
    console.log(args);

    let result = 0;
    for (let value of args) {
        result = result + value;
    }
    console.log(result);
}

sum2(10, 20);
sum2(10, 20, 30, 40);
sum2(10);

function sum3(first, second, ...args) {
    console.log(first);
    console.log(second);
    console.log(args);
}

sum3(10, 20);
sum3(10, 20, 30, 40);
sum3(10);

/**
 * return
 */
function sum4(first, second, ...args) {
    let result = first + second;
    for (let value of args) {
        result = result + value;
    }
    return result;
}

console.log(sum4(10, 20));
console.log(sum4(10, 20, 30, 40));
console.log(sum4(10));

/**
 * 객체와 함수. (메서드)
 */
const person = {
    name: "John",
    age: 30,
    job: "developer",
    introduce: function () {
        console.log(`안녕하세요, 저는 ${this.name}입니다.`);
    }
};

person.introduce();