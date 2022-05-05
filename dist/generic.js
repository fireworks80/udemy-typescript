"use strict";
// 제네릭 타입은 다른 타입과 연결되는 종류인데 다른 타입이
// 어떤 타입이어야 하는지에 대해서는 크게 상관하지 않는다.  
// generic은 배열이다
// names는 두개의 타입이 결합된 것이다 (string[])
// const names = ['Max', 'Manuel'];
// generic type 이지만 1개의 arguments를 가져야 한다
const names = [];
function countAndDescription(element) {
    const description = element.length === 1 ? 'Got 1 element.' : element.length > 1 ? `Got ${element.length} elements.` : 'Got no value.';
    return [element, description];
}
console.log(countAndDescription('Hi there!'));
console.log(countAndDescription(['sports', 'cookie']));
console.log(countAndDescription([]));
console.log(countAndDescription({ length: 3 }));
// notion: https://www.notion.so/generic-c3e271650710431ebf7694ba94492cab
