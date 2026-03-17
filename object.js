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
