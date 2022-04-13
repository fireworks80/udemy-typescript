function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result:', num);
}

printResult(7);

// 타입 명시 또는 타입 할당을 하지 않았으므로 any타입이 된다.
let combineValues;

// combineValues = add;
// console.log(combineValues(8, 8)); // 16

// 중간에 combineValues를 5로 재할당 해줌
// any 타입이기 떄문에 타입스크립트에서도 오류 발생 안함
// 하지만 컴파일 후에는 'combineValues is not a function' 오류 발생
// combineValues = add;
// combineValues = 5;
// console.log(combineValues(8, 8));

combineValues = add;
combineValues = printResult;
console.log(combineValues(8, 8));
