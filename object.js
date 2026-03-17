/**
 * 생성자 함수.
 */
console.log('-------');
console.log('생성자 함수');

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('오scar', 20);
console.log(person1);

console.log('-------');
console.log('this');

function Person2(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function () {
        console.log(`안녕하세요 ${this.name}입니다.`);
    };
}

const person2 = new Person2('오scar', 20);
console.log(person2);
person2.introduce();

console.log('-------');

// new 없이 생성자 함수 호출하면 window 객체에 추가됨.
Person2('오scar_window', 200);
// console.log(window.name); // 오scar_window
// console.log(window.age); // 200


// 함수도 객체다.
function Person3() { };
// 객체와 같이 여러 정보가 포함되어 있는 것을 볼 수 있다.
console.dir(Person3);
console.log(Person3.name);
// 가변인자에 대해 배울 때 사용했었던 arguments의 정체는 함수 객체의 프로퍼티다.
console.log(Person3.arguments);

/**
 * 프로토타입.
 */
console.log('-----------------------프로토타입-------------');
// 함수와 프로토타입 객체는 1:1 관계를 가진다.
console.dir(Person3);
console.log(Person3.prototype);
console.log(Person3.__proto__); // 프로토타입 내부 슬롯. 콘솔에서 [[Prototype]] 로 보임
console.log(Person3.prototype.constructor); // Person3 함수 객체

/**
 * 프로토타입 체인.
 */
console.log('-----------------------프로토타입 체인-------------');
function ProtoTypeChain(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function () {
        console.log(`안녕하세요 ${this.name}입니다.`);
    };
}

const protoTypeChain1 = new ProtoTypeChain('1', 21);
const protoTypeChain2 = new ProtoTypeChain('2', 22);
const protoTypeChain3 = new ProtoTypeChain('3', 23);
const protoTypeChain4 = new ProtoTypeChain('4', 24);
console.log(protoTypeChain1.__proto__ === ProtoTypeChain.prototype); // true
console.log(protoTypeChain2.__proto__ === ProtoTypeChain.prototype); // true
console.log(protoTypeChain3.__proto__ === ProtoTypeChain.prototype); // true
console.log(protoTypeChain4.__proto__ === ProtoTypeChain.prototype); // true

// 체인으로 객체 자신을 생성한 생성자까지 참조할 수 있다.
console.log(protoTypeChain1.__proto__.constructor === ProtoTypeChain); // true
// 알아서 체이닝 됨. this 가 바인딩 된다는 데 차이점은 다음강의
console.log(protoTypeChain1.constructor === ProtoTypeChain); // true

