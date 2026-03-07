/**
 * 조건문.
 */

/**
 * if 문.
 */
console.log("if 문");

const age = 20;
if (age >= 19) {
    console.log("성인");
}

/**
 * if-else 문.
 */
console.log("if-else 문");

const age2 = 20;
if (age2 >= 19) {
    console.log("성인");
} else {
    console.log("미성년");
}

/**
 * if-else if-else 문.
 */
console.log("if-else if-else 문");

const age3 = 20;
if (age3 >= 19) {
    console.log("성인");
} else if (age3 >= 13) {
    console.log("청소년");
} else {
    console.log("어린이");
}

/**
 * switch 문.
 */
console.log("switch 문");

const age4 = 20;
switch (age4) {
    case 19:
        console.log("성인");
        break;
    case 13:
        console.log("청소년");
        break;
    default:
        console.log("어린이");
        break;
}

/**
 * 반복문.
 */

/**
 * for 문.
 */
console.log("for 문");

for (let i = 0; i < 10; i++) {
    console.log(i);
}

/**
 * while 문.
 */
console.log("while 문");

let i2 = 0;
while (i2 < 10) {
    console.log(i2);
    i2++;
}

/**
 * do-while 문.
 */
console.log("do-while 문");

let i3 = 0;
do {
    console.log(i3);
    i3++;
} while (i3 < 10);

/**
 * break 문.
 */
console.log("break 문");

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

/**
 * continue 문.
 */
console.log("continue 문");

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

/**
 * ES6 for-in 문.
 */
console.log("for-in 문");

const obj = {
    name: "John",
    age: 30,
    job: "developer"
};
const arr = [1, 2, 3, 4, 5];

for (const key in obj) {
    console.log(`key: ${key}`);
    console.log(`value: ${obj[key]}`);
}
for (const index in arr) {
    console.log(`index: ${index}`);
    console.log(`value: ${arr[index]}`);
}

/**
 * ES6 for-of 문. 배열용.
 */
console.log("for-of 문");

for (const value of arr) {
    console.log(value);
}


/**
 * 100 ~ 999 까지 정수 중 암스트롱 수 구하는 코드 작성.
 * 암스트롱 수: 각 자리수에 있는 숫자들의 세제곱의 합이 자신과 같은 수.
 * ex) 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 */
let result = [];
for (let num = 100; num < 1000; num++) {
    let arr = [parseInt(num / 100), parseInt(num % 100 / 10), parseInt(num % 10)];
    let sum = arr[0] ** 3 + arr[1] ** 3 + arr[2] ** 3;

    if (sum === num) {
        result.push(num);
    }
}
console.log(result);
