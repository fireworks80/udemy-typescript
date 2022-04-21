// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }

// let user: Person;

// user = {
//   name: 'Max',
//   age: 30,
//   greet(desc: string) {
//     console.log(desc + ' ' + this.name);
//   }
// };


// user.greet('Hello there - ');

interface Greetable {
  name: string;
  greet(phrase: string): void;
}

//                               , anotherImplement 처럼 여러개를 받을 수 있다
class Person implements Greetable {
  // 인터페이스 일때는 constructor에만 프로퍼티를 선언하거나 
  // private 같은 키워드를 붙일 수 없다.
  name: string; 
  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name);
  }
}


let user: Greetable;

user = {
  name: 'Max',
  // age: 30; // interface에 정의되지 않았으므로 에러 발생
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
};