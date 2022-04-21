# section5 클래스 & 인터페이스

## 63.약식기초

```
class DepartmentPrivate {
  // private 또는 public선언
  (private | public) name: string;

  constructor(name: string) {
    this.name = n;
  }
}

# 필드 선언 후 constructor에 또 중복으로 선언을 하게 되면 비효율적
# 변경후

class DepartmentPrivate {
  // private name: string;

  constructor(private name: string) { // 이 부분에서 필드를 찾은 다음 값을 저장하는 이중 초기화를 한번에 처리
    // this.name = n;
  }
}
```

## 64. [읽기 전용](./first-class/src/private-public.ts)

private, public도 아니고 변경이 되어서도 안되는 경우
초기화 되고 나면 변경할 수 없다.

```
class DepartmentPrivate {
  // private readonly id: string;
  private employees: string[] = [];

  constructor(private readonly id: string, private name: string) {
    // this.name = name;
  }
  ...

  describe() {
    this.id = 'd2'; // error
  }
}
```

## 65. [상속](./first-class/src/inherit.ts)

```
// extends 부모 클래스
class ITDepartment extends DepartmentInherit {}

// ITDepartment가 비어 있어서 생성자 호출이 가능
const acInherit = new ITDepartment('12', 'Accounting');

// ------------------------------------------------------

class ITDepartment extends DepartmentInherit {
  constructor(id: string) {
    super(id); // 기본 클래스(DepartmentInherit)의 생성자를 호출 한다.
  }
}

// ITDepartment가 비어 있어서 생성자 호출이 가능
const acInherit = new ITDepartment('12');
```

## 66. [protected](./first-class/src/protected.ts)

- private은 상속된 클래스에서는 사용 될 수 없다.
- 상속된 클래스에서 메서드 오버라이드가 가능하다.

```
class DepartmentProtected {
-  private employees: string[] = [];
+  protected employees: string[] = [];

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

...

class AccountingDepartment2 extends DepartmentProtected {
+  addEmployee(name: string): void {
+    if (name === 'Max') return;
+    this.employees.push(name);
+  }
}

```

## 67. getter / setter

- 로직을 캡슐화하고 속성을 읽거나 설정하려 할 때 사용한다.

```
class Test {
  constructor(private name: string) {

  }

  get testName() { // 작성할때는 메서드 형태
    return this.name;
  }

  set testName(name: string) {
    this.name = name;
  }
}

const test = new Test('hello');
test.testName; // hello

test.testName = 'bello'; # this.name에 값을 넣는다.

```

## 68. 정적메서드 / 정적 속성

- 인스턴스 에서는 접근 불가
- Math 객체 ....
- new 클래스명() 안해도 된다.
- static 키워드를 붙인다
- 클래스 내에서 정적 요소에 접근 하려면 클래스 이름으로 접근 해야 한다.

```
class Test {

  static name = 'teresa';

  static print() {
    console.log('This is Test...');
  }

  printName() {
    console.log(Test.name);
  }
}
```
## 69. 추상 클래스
- 추상 클래스는 인스턴스를 만들 수 없다.
- 상속받은 클래스들이 공통적으로 가졌으면 하는 메서드 등을 추상 클래스에서 정의 한다.
- 상속받은 클래스는 추상 클래스에서 정의한 메서드를 구현 해야 한다.
- absctract 키워드를 사용한다.
- 추상 메서드는 동작을 구현하면 안된다
- 반환 타입은 void로 설정 한다
```
abstract class MyAbClass {
  constructor(protected id: string) {}

  abstract describe(): void;
}

// describe()를 구현 하지 않았으므로 오류 발생
class InheritClass extends MyAbClass {
  constructor(id: string) {
    super(id);
  }

+ describe() {
+   console.log(this.id);
+ }

}
```

## 70. singleton
- 하나의 객체만 가져야 할때 
- constructor를 private으로 선언한다.
```
class MyClass {
  
  // MyClass로 접근 할 수 있는 static 이지만 private
  // 이므로 MyClass 내에서만 접근 가능 하다
  private static instance: MyClass;

  private constructor(private id: string) {
  }

  static getInstance() {
    // this.instance를 사용하면 
    // 이 클래스 자체를 참조하게 되어
    // 다른 모든 정적 속성에 접근이 가능 하게 된다. 
    if (MyClass.instance) {
      return this.instance;
    }

    this.instance = new MyClass();
  }
}

// error 
const me = new MyClass('32');
```

## 72. interface
- 객체의 형태를 설명한다 
- 첫 글자는 대문자
- 클래스 처럼 사용하지 않고 사용자 타입을 정의
- 초기값을 가질 수 없다

```
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user: Person;

user = {
  name: 'Max',
  age: 30,
  greet(desc: string) {
    console.log(desc + ' ' + this.name);
  }
};


user.greet('Hello there - ');

// interface 대신 타입으로 해도 오류가 나지 않는다.
type Person = {
  name: string;
  age: number;
  greet(phrase: string): void;
}

```

interface 와 type 은 완전히 같지 않다.

### 인터페이스와 type의 차이
- 인터페이스는 객체의 구조를 설명하기 위해서만 사용한다.
- 클래스가 인터페이스를 준수하는 약속처럼 사용 할 수 있다. 

### 클래스에서 인터페이스 사용
- implements 키워드 사용
- 상속은 하나의 클래스만 상속 받지만 인터페이스는 ,(콤마)로 여러개를 받을 수 있다
- 인터페이스는 구체적인 구현이 아닌 서로 다른 클래스간의 기능을 공유하기 위해 사용

```
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
```