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

/**
 * 객체 리터럴
 * 하나의 데이터에 여러 데이터 형태의 값을 묶어 한 번에 할당하기 위해 사용.
 */
const obj = {
    key1: 10,
    key2: 20,
    key3: 'js',
    key4: true,
    key5: null,
    key6: undefined,
    key7: Symbol(),
    key8: [],
    key9: { key: 'value' },
    key10: function () { console.log('함수 원소'); },
    "white space key": 'white space key value',
};
console.log(obj);
console.log(obj.key1);
console.log(obj['key1']);
console.log(obj['white space key']);
console.log(obj.key9.key);
obj.key10();

/**
 * 함수.
 */
function func() {
    console.log('함수');
}
func();

// 함수 표현식
const func2 = function () {
    console.log('함수 표현식');
};
func2();

/**
 * 얕은 복사와 깊은 복사
 * 
 * 얕은복사: 메모리 주소만 복사.
 * 깊은복사: 메모리 주소 복사 + 메모리 주소에 할당된 값 복사. -> 서로 독립적인 데이터를 가짐.
 */

// 얕은 복사
console.log("얕복");
const originalObj = { name: '철수' };
const shallowCopyObj = originalObj;
console.log(originalObj);
console.log(shallowCopyObj);

shallowCopyObj.name = '영희';
console.log(originalObj);
console.log(shallowCopyObj);

// 깊은 복사
console.log("깊복");

const deepCopyObj = { ...originalObj };
console.log(originalObj);
console.log(deepCopyObj);

originalObj.name = '철수';
console.log(originalObj);
console.log(deepCopyObj);

let a = 10;
let b = a;
console.log(a);
console.log(b);

b = 20;
console.log(a);
console.log(b);


/**
 * 연산자 우선순위.
 */
console.log("연산자 우선순위.");
const arithmetic1 = 10 + 20 - 10;
console.log(arithmetic1);

const arithmetic2 = 10 + 20 * 10;
console.log(arithmetic2);

const arithmetic3 = 10 + 20 * 10 / 5;
console.log(arithmetic3);

const arithmetic4 = (10 + 20) * 10 / 5;
console.log(arithmetic4);

const arithmetic5 = 10 + 20 * 10 % 3;
console.log(arithmetic5);


/**
 * 문자열 연결 연산자.
 */
console.log("문자열 연결 연산자.");

const str10 = 'Hello';
const str20 = 'World';
console.log(str10 + str20);
console.log(str10 - str20); // NaN : Not a Number

// 문자 연산자 숫자 일 경우
console.log("10" + 10); // 1010 -> + 는 문자열로 형변환
console.log("10" - 10); // 0 -> - 는 숫자로 형변환  (숫자처럼 생겼을 때) 숫자 아니면 NaN
console.log("10" * 10); // 100 -> * 는 숫자로 형변환 (숫자처럼 생겼을 때)
console.log("10" / 10); // 1 -> / 는 숫자로 형변환 (숫자처럼 생겼을 때)
console.log("10" % 3); // 1 -> % 는 숫자로 형변환 (숫자처럼 생겼을 때)


/**
 * 복합 대입 연산자. -> 다른 연산자와 대입 연산자를 혼합해서 사용하는 연산.
 */
console.log("복합 대입 연산자");

let num = 10;
num = num + 10;
console.log(num);

num += 10;
console.log(num);

num -= 10;
console.log(num);

num *= 10;
console.log(num);

num /= 10;
console.log(num);

num %= 10;
console.log(num);

// 거듭제곱
num += 2;
num **= 10; // 거듭제곱 연산. 2의 10제곱
console.log(num);


/**
 * 비교 연산자.
 */
console.log("비교 연산자");

console.log(`== -> 값만 비교 : ${10 == 10}`);
console.log(`== -> 값만 비교 : ${10 == '10'}`);  // 형변환이 이루어지고 연산 수행해서 값 비교 가능.
console.log(`=== -> 값 + 타입 비교 : ${10 === 10}`);
console.log(`=== -> 값 + 타입 비교 : ${10 === '10'}`); // 자료형이 달라서 false

// != 부등
console.log(`!= -> 값만 비교 : ${10 != 10}`);
console.log(`!= -> 값만 비교 : ${10 != '10'}`); // 형변환이 이루어지고 연산 수행해서 값 비교 가능.
console.log(`!== -> 값 + 타입 비교 : ${10 !== 10}`);
console.log(`!== -> 값 + 타입 비교 : ${10 !== '10'}`);

// AI 야 그럼 == 나 != 보다는 === 나 !== 를 쓰는 게 좋냐? 대답: 응. 왜냐하면 == 나 != 는 형변환이 이루어지기 때문에 
// 의도치 않은 결과가 나올 수 있음. (예시: null == undefined -> true)
console.log('null 과 undefined 에 대한 비교');
console.log(null == undefined);
console.log(null === undefined);


// 대소 > >= < <=
console.log(`>  : ${20 > 20}`);
console.log(`>= : ${20 >= 20}`);
console.log(`<  : ${20 < 20}`);
console.log(`<= : ${20 <= 20}`);

/**
 * 삼항 연산자.
 * condition ? exprlfTrue : exprlfFalse
 * 빈문자열, 0, null, undefined, false, NaN -> false 로 취급됨. 
 */
console.log("삼항 연산자");

const age = 20;
const message = age >= 19 ? '성인' : '미성년';
console.log(message);