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
    },
    introduceArrow: () => {
        // 객체리터럴에서 화살표함수 내 this 사용불가.
        console.log(`안녕하세요, 저는 ${this.name}입니다.`);
    }
};

person.introduce();

/**
 * 화살표 함수. ES6.
 */
const sum5 = (first, second, ...args) => {
    let result = first + second;
    for (let value of args) {
        result = result + value;
    }
    return result;
};

console.log(sum5(10, 20));
console.log(sum5(10, 20, 30, 40));
console.log(sum5(10));

// 매개변수 한개일때 소괄호 생략가능.
// 바디가 한 줄이면 생략가능.
const pow = num => num * num;
console.log(pow(10));

const log = () => console.log("hello");
log();

/**
 * 스코프.
 * 글로벌스코프와 로컬스코프.
 */
const name = '철수';
function printName() {
    const name = '영희'; // const 로 name 이 또 쓰였지만, 스코프가 달라서 가능함.
    console.log(`이름은 ${name}입니다.`); // 영희
}
printName();
console.log(`이름은 ${name}입니다.`); // 철수

