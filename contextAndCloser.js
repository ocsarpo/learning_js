/**
 * 렉시컬 환경?
 * 렉시컬 환경은 자바스크립트에서 변수와 함수의 유효 범위를 결정하는 개념입니다.
 * 렉시컬 환경은 코드가 작성된 위치에 따라 변수와 함수의 접근성을 결정합니다.
 * 즉, 함수가 어디에서 정의되었는지에 따라 그 함수가 접근할 수 있는 변수와 함수가 달라집니다.
 * 환경 레코드: 렉시컬 환경은 환경 레코드라는 객체를 포함합니다. 이 객체는 변수와 함수의 이름과 값을 저장합니다.
 * 외부 렉시컬 환경 참조: 렉시컬 환경은 외부 렉시컬 환경에 대한 참조를 가질 수 있습니다. 이를 통해 중첩된 함수가 외부 함수의 변수에 접근할 수 있습니다.
 * 
 * 하나의 스코프에 하나의 실행 컨텍스트가 존재하며, 실행 컨텍스트는 렉시컬 환경과 관련이 있습니다. 함수가 호출될 때마다 새로운 실행 컨텍스트가 생성되고, 이 컨텍스트는 해당 함수의 렉시컬 환경을 포함합니다.
 * 
 * 스코프체인: 렉시컬 환경은 스코프체인을 형성합니다. 스코프체인은 현재 실행 중인 코드가 변수나 함수를 찾을 때 참조하는 일련의 렉시컬 환경입니다. 현재 렉시컬 환경에서 찾지 못하면 외부 렉시컬 환경으로 이동하여 계속 검색합니다.
 */

const a = 10;
function outer() {
    const b = 20;
    function inner() {
        const c = 30;
        console.log(a); // 10 (외부 렉시컬 환경 참조)
        console.log(b); // 20 (외부 렉시컬 환경 참조)
        console.log(c); // 30 (현재 렉시컬 환경)
    }
    inner();
}
outer();
log(a); // 10 (전역 렉시컬 환경)
log(b); // ReferenceError: b is not defined (b는 outer 함수의 렉시컬 환경에만 존재)
log(c); // ReferenceError: c is not defined (c는 inner 함수의 렉시컬 환경에만 존재)

/**
 * 클로저?
 * 클로저는 함수와 그 함수가 선언된 렉시컬 환경의 조합입니다. 클로저는 함수가 외부 함수의 변수에 접근할 수 있도록 합니다.
 * 클로저는 주로 데이터 은닉과 캡슐화에 사용됩니다. 클로저를 사용하면 외부에서 접근할 수 없는 변수를 만들 수 있으며, 이를 통해 데이터 보호와 모듈화를 구현할 수 있습니다.
 * 
 * 클로저는 함수가 외부 함수의 변수에 접근할 때마다 생성됩니다. 따라서 클로저는 메모리를 차지할 수 있으므로, 필요하지 않은 경우에는 클로저를 사용하지 않는 것이 좋습니다.
 * 
 * 클로저를 사용하는 이유: 현재 상태를 기억하고 변경된 최신 상태를 유지
 * -> 변수의 은닉화와 관련있음.
 */

// 클로저를 사용한 카운터 : count 변수를 외부에 노출하지 않음.
function makeCounter() {
    let count = 0; // 외부 함수의 변수

    // 이너함수를 리턴함. 
    // 이너함수에서는 외부 함수의 변수를 리턴함. 즉 아우터함수의 렉시컬 환경 참조를 유지함.
    // 그래서 외부함수의 실행컨텍스트를 제거하지 않고, 메모리에 임시보관함.
    return function () { // 클로저
        count++; // 외부 함수의 변수에 접근
        return count;
    };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// 클로저가 차지하는 메모리 초기화
counter = null;

/**
 * 호이스팅.
 * 자바스크립트가 실행되기 전에, 코드를 선언과 할당으로 분리하고 선언부분을 상단으로 이동시킴.
 * var 에서만 발생.
 */

// a 정보가 없는데 에러가 안나는 이유를 알아야한다.
// 호이스팅됐기 때문이다.
/**
 * 호이스팅 과정.
 * var a;
 * console.log(a); // undefined
 * a = 10;
 */
function foo() {
    console.log(a); // undefined
    var a = 10;
}
foo();

/**
 * 호이스팅 예시 2.
 * 함수 선언문이 함수 표현식보다 위에 위치해도 정상적으로 실행됨.
 * 
 * 호이스팅 과정.
 * var res;
 * function pow(x) {
 *     return x * x;
 * };
 * 
 * res = pow(4);
 * console.log(res);
 */
var res = pow(4);
console.log(res);
function pow(x) {
    return x * x;
}

/**
 * 예시 3번. 함수 표현식은 주의할 점
 * 
 * 호이스팅 과정.
 * var res2;
 * var pow2;
 * res2 = pow2(4); // 에러발생. pow2 함수 정보 없음
 * console.log(res2);
 * pow2 = function (x) {
 *     return x * x;
 * };
 */
var res2 = pow2(4);
console.log(res2);
var pow2 = function (x) { // 에러발생.
    return x * x;
};

// 예시 4번. 전역과 지역.
var varA = 10;
function outer() {
    /**
     * var varA;
     * console.log(varA); // undefined // 호이스팅됨.
     * var varA = 20;
     * console.log(varA); // 20
     */
    console.log(varA); // undefined // 호이스팅됨.
    var varA = 20;
    console.log(varA); // 20
}
outer();

/**
 * let, const 에서는 호이스팅이 발생하지 않음. : TDZ(Temporal Dead Zone) 일시적 사각지대
 */
console.log(letA); // ReferenceError: letA is not defined
let letA = 10;

/**
 * 즉시 실행 함수.
 * 함수를 선언함과 동시에 호출도하는 함수 형태.
 * 한 번만 실행되면 되는 경우에 사용함. (메모리 세이빙, 효율적인 코드 작성..)
 */
(function () {
    console.log("즉시 실행 함수 1");
})();

(() => {
    console.log("즉시 실행 함수 2");
})();

((a, b) => { console.log(a + b) })(1, 2);

// 화살표함수가 아닌 경우 변수 할당 가능. 이 땐 소괄호 안해도됨.
const foo = function () {
    console.log("즉시 실행 함수 3");
};
foo();

const add = function () {
    console.log("즉시 실행 함수 4");
    return function (a, b) {
        return a + b;
    }
}();
const addResult = add(1, 2);
console.log(addResult);