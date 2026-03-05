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

