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
