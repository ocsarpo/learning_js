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
console.log(window.name); // 오scar_window
console.log(window.age); // 200