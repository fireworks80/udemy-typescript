# 함수 타입

```
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result:', num);
}

// 타입을 명시 하지 않아 any 타입
let combineValues;

combineValues = add;
console.log(combineValues(8, 8)); // 16
```

```
  combineValues = add;
// 중간에 combineValues에 5라는 숫자를 재할당 한다.
// any 타입이므로 컴파일 오류가 발생하지 않는다.
+ combineValues = 5;
  console.log(combineValues(8, 8));

// js 변환 후 'combineValues is not a function' 오류 발생
```

## Function type 명시

```
- let combineValues;
// Function 이라는 타입 명시
+ let combineValues: Function;

...
combineValues = add;
// Type 'number' is not assignable to type 'Function'.ts(2322)
// 이라는 오류 발생
combineValues = 5;
```

```
let combineValues: Function;

...

  combineValues = add;
- combineValues = 5;
// printResult라는 함수로 변경
+ combineValues = printResult;

console.log(combineValues(8, 8));

# 결과
Result: 8
undefined
```

위 예제는 함수만 combineValues에 할당 하도록 되어 있지만, add 함수외에 어떤 함수도 할당이 가능 하게 되어 있다.

## 특정 타입의 함수만 가능하도록

```
let combineValues: (a: number, b: number) => number;

combineValues = add;
// Type '(num: number) => void' is not assignable to type '(a: number, b: number) => number'.
// Type 'void' is not assignable to type 'number'.ts(2322)
// 에러를 발생 한다.
combineValues = printResult;
```

위 예는 combineValues는 `(a: number, b: number) => number` 형태의 함수만 받을 수 있다.
