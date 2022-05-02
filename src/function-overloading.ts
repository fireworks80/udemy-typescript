type Combinable = string | number;

// return type은 Combinable 이다
// function add(a: Combinable, b: Combinable) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }

//   return a + b;
// }

// const result = add('max', ' schwarz');

// 프로그래머는 문자열이 반환될 것을 알지만
// typescript는 string | number 타입이 반환될 것으로 알고 있어서 .split()은 오류를 나타낸다
// result.split(' ');

// 형변환을 해서 문자열을 반환 한다고 ts에게 알려 줄수 있다.
// const result = add('max', ' schwarz') as string; 
// result.split(' ');


function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

const result = add('max', ' schwarz'); 
console.log(result.split(' '));

console.log(add(10, 3));

