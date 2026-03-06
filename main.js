var str0 = 'Hello Code Runner!';

console.log(str0);
console.log(str0);
console.log(str0);
console.log(str0);

// var -> 키워드 (변수 선언 시 사용. 따라서 sum 은 변수)
// = -> 할당 연산자.
// 10 -> 피연산자.
// + -> 연산자.
// 20 -> 피연산자.
// 10 + 20 -> 표현식.
// 표현식의 결과 30 -> 값
var sum = 10 + 20;

/**
 * let 과 const 키워드.
 * ---- AI 자동완성 START----
 * var : ES5 에서 사용하던 변수 선언 키워드.
 * let : ES6 에서 사용하는 변수 선언 키워드.
 * const : ES6 에서 사용하는 상수 선언 키워드.
 * 
 * var, let, const 차이점.
 * 
 * var : 함수 스코프.
 * let, const : 블록 스코프.
 * 
 * var : 재선언 가능.
 * let, const : 재선언 불가능.
 * 
 * var : 재할당 가능.
 * let : 재할당 가능.
 * const : 재할당 불가능.
 * 
 * var : 초기화 전에 사용 가능.
 * let, const : 초기화 전에 사용 불가능.
 * 
 * var : undefined.
 * let, const : ReferenceError.
 * 
 * var : 런타임 에러.
 * let, const : 컴파일 에러.
 * 
 * var : 호이스팅이 발생.
 * let, const : 호이스팅이 발생하지 않음.
 * ---- AI 자동완성 END ----
 */


/**
 * 문자열.
 * "문자열", '문자열', `문자열`.
 */
let str = "HTML";
console.log(str);

let str2 = 'JavaScript';
console.log(str2);

let str3 = `CSS`;
console.log(str3);

let str4 = '작따 안에서" 큰따쓰기'
console.log(str4);

let str5 = "큰따 안에서' 작따쓰기";
console.log(str5);

let str6 = '작따안에서 또 작따써야할 경우 \' 이스케이프 문자 쓰기~!';
console.log(str6);

/**
 * 백틱 ` : 템플릿 문자열
 */
let str7 = `백틱에서는 ' 든 " 든 걍 막 쓸 수 있쥐 \` \``;
console.log(str7);

let str8 = `백틱에서
는 
줄바꿔서
가능
내부에서 변수사용하기 ((((((${str7}))))))
`;
console.log(str8);

/**
 * 숫자형. 뭐를 해도 10진수로 출력됨.
 */
let integer = 10;
let hex = 0xa;
let binary = 0b1010;
let octal = 0o12;
console.log(integer);
console.log(hex);
console.log(binary);
console.log(octal);

let negative = -10;
console.log(negative);
let indices = 1.0e1; // 지수.
console.log(indices);
let double = 10.12; // 소수.
console.log(double);

/**
 * 논리형.
 */
let bool1 = true;
let bool2 = false;
console.log(bool1);
console.log(bool2);

let bool3 = 10 > 20;
console.log(bool3);

/**
 * 특수자료형. null, undefined.
 * 
 * undefined 선언된 메모리 공간에 아무런 값이 할당되지 않으면 undefined 라는 값이 할당됨.
 * null : 의도적으로 메모리 공간을 비워두기 위해 사용하는 값.
 */
let null1 = null; // 의도적으로 비워두기 위해 할당.
let undefined0
let undefined1 = undefined; // 이렇게 쓰는 일은 없음.
console.log(null1);
console.log(undefined0);
console.log(undefined1);


/**
 * 심볼형: ES6에서 추가된 자료형.
 * 중복되지 않는 고유한 값을 생성하고 싶을 때. (쓸 일 거의 없다고함.)
 */
let symbol1 = Symbol();
console.log(symbol1);

let symbol2 = Symbol();
console.log(symbol2);

// 심볼끼리 비교할 때는 === 연산자 사용.
console.log(symbol1 == symbol2);
console.log(symbol1 === symbol2);

let symbol3 = Symbol('여기에쓰는건그냥주석역할');
console.log(symbol3);

let symbol4 = Symbol('여기에쓰는건그냥주석역할');
console.log(symbol4);

console.log(symbol3 == symbol4);
console.log(symbol3 === symbol4);

/**
 * 심볼에 키 지정하면 같은 키면 같은 심볼 반환.
 */
let symbol5 = Symbol.for('message');
console.log(symbol5);

let symbol6 = Symbol.for('message');
console.log(symbol6);

console.log(symbol5 == symbol6);
console.log(symbol5 === symbol6);

/**
 * == 랑 === 차이점.
 * 
 * == : 값만 비교.
 * === : 값 + 타입 비교.
 * 
 * == : 타입이 다르면 타입을 맞춰서 비교.
 * === : 타입이 다르면 바로 false 반환.
 */

/**
 * 배열
 */
const arr = [10, 20, 'js', true, null, undefined, Symbol(), [], { key: 'value' }, function () { console.log('함수 원소'); }];
console.log(arr);
console.log(arr[8].key);
arr[9]();
