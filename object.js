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

/**
 * 프로토타입 활용
 */
console.log('-----------------------프로토타입 활용-------------');
// name과 age 는 바뀔 수 있지만. introduce 함수는 바뀌지 않는다.
// 객체에 중복된 속성이 있다는 것.
// 중복된 코드를 프로토타입 객체에 등록하여 중복을 줄일 수 있다.
// 프로토타입에 두면 객체에는 속성이 빠진다. __proto__ 로 접근하여 참조할 수 있기 때문에 전혀 문제없다.

function ProtoTypeUtil(name, age) {
    this.name = name;
    this.age = age;
}

ProtoTypeUtil.prototype.introduce = function () {
    console.log(`안녕하세요 ${this.name}입니다.`);
};

const protoTypeUtil1 = new ProtoTypeUtil('1', 21);
const protoTypeUtil2 = new ProtoTypeUtil('2', 22);
const protoTypeUtil3 = new ProtoTypeUtil('3', 23);
const protoTypeUtil4 = new ProtoTypeUtil('4', 24);
console.dir(protoTypeUtil1); // introduce 가 프로토타입 내부슬롯에 위치함을 알 수 있음
console.log(protoTypeUtil1.__proto__ === ProtoTypeUtil.prototype); // true
console.log(protoTypeUtil2.__proto__ === ProtoTypeUtil.prototype); // true
console.log('-------------------------');
console.log(protoTypeUtil2.__proto__.introduce()); // undefined -> 프로토타입객체에는 name, age 속성이 없어서 this.name 이 undefined
console.log(protoTypeUtil2.introduce()); // 안녕하세요 2입니다. -> this 가 객체에 바인딩 됐기 때문에 name 접근 가능. 
console.log('-----------------------------');
console.log(protoTypeUtil2.__proto__.introduce === ProtoTypeUtil.prototype.introduce); // true
console.log(protoTypeUtil1.introduce === protoTypeUtil2.introduce); // true

/**
 * 프로토타입 체인 심화.
 */
console.log('-----------------------프로토타입 체인 심화-------------');
/**
 * 모든 객체는 Object.prototype을 상속받는다. 그래서 Object 에 있는 함수를 다 하위 객체들에서 쓸 수 있음.
 */
console.dir(protoTypeUtil2)
console.log(protoTypeUtil2.__proto__.__proto__ === Object.prototype); // true
console.dir(Object.prototype); // __proto__ 가 없음
console.log(protoTypeUtil2.hasOwnProperty("name")); // true
console.log(protoTypeUtil2.hasOwnProperty("age")); // true
console.log(protoTypeUtil2.hasOwnProperty("introduce")); // false
console.log(protoTypeUtil2.__proto__.hasOwnProperty("introduce")); // true

