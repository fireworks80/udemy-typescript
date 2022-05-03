// 제네릭 타입은 다른 타입과 연결되는 종류인데 다른 타입이
// 어떤 타입이어야 하는지에 대해서는 크게 상관하지 않는다.  

// generic은 배열이다
// names는 두개의 타입이 결합된 것이다 (string[])
// const names = ['Max', 'Manuel'];

// generic type 이지만 1개의 arguments를 가져야 한다
const names: Array = [];


// Array<string> 은 string[]과 같다
// const names: Array<string> = [];

// promise: Promise<unknown>
// unknown은 resolve에서 무엇을 반환할지 잘 모른다고 나타내는 것
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done');
//   }, 2000);
// });

// generic type으로 string을 반환한다고 나타낸다

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done');
//   }, 2000);
// });

// 두 객체를 병합해 새로운 객체를 반환하는 함수
// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

// 실행은 잘된다. 하지만 변수에 저장할때 문제가 발생 한다.
// console.log(merge({name: 'Max'}, {age: 34}));


// 객체를 반환 했지만 정확한 정보를 가지고 있지 않는다.
// const mergedObj = merge({name: 'han'}, {age: 37});
// mergedObj.name;

// 해결법 1. 타입 캐스팅
// const mergedObj = merge({name: 'han'}, {age: 37}) as {name: string, age: number};
// mergedObj.name;

// 해결법 2. generic
// function merge<T, U>(objA: T, objB: U): T & U 
// 인 인터섹션을 반환 한다.
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// const mergedObj = merge({name: 'han'}, {age: 37});
// const mergedObj2 = merge({name: 'han', hobbies: ['sports']}, {age: 37});
// console.log(mergedObj);

// object 타입이 아닌 T 또는 U 객체를 추론을 할까?
// object가 구체적인 타입이 아니기에 어떤 객체든 입력할 수 있어서 
// 타입스크립트가 두 객체의 인터섹션이 반환된다는 것을 추론 할 수 있다.
// 그러나 미상의 두 객체의 인터섹션은 새로운 미상의 객체일 뿐이므로
// 타입 정보를 타입스크립트에게 넘겨 줄 수 없다


// 함수 선언시 타입들을 고정적으로 설정 되지 않고
// 함수 호출시 동적일 수 있도록 설정 됨
// const mergedObj = merge({name: 'han'}, {age: 37});
// const mergedObj2 = merge({name: 'han', hobbies: ['sports']}, {age: 37});
// console.log(mergedObj);

// typescript에게 구체적으로 어떤 타입을 작성해야 하는지 알려 줄 수 있다.
// merge 함수 호출 시 T, U에 해당 하는 타입을 넣어준다
const mergedObj = merge<{name: string}, {age: number}>({name: 'han'}, {age: 37});

// notion: https://www.notion.so/generic-c3e271650710431ebf7694ba94492cab