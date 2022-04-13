function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result:', num);
}

printResult(7);

// let combineValues;

// combineValues = add;
// console.log(combineValues(8, 8)); // 16

// combineValues = add;
// 값 변경
// combineValues = 5;
// console.log(combineValues(8, 8));

// ====================================================

// let combineValues: Function;

// combineValues = add;
// console.log(combineValues(8, 8)); // 16

// combineValues = add;
// 오류발생
// combineValues = 5;
// console.log(combineValues(8, 8));

// ===================================================
// combineValues = add;
// combineValues = printResult;
// console.log(combineValues(8, 8)); // Result: 8 \n undefined

// ===================================================
let combineValues: (a: number, b: number) => number;

combineValues = add;
// (a: number, b: number) => number type의 함수가 아니므로 오류
combineValues = printResult;
