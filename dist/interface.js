"use strict";
// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }
//                               , anotherImplement 처럼 여러개를 받을 수 있다
class Person {
    constructor(name) {
        this.name = name;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user;
user = {
    name: 'Max',
    // age: 30; // interface에 정의되지 않았으므로 에러 발생
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
