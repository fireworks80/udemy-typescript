"use strict";
// 1
// HTMLParagraphElement | null
// const p = document.querySelector('p');
// 2
// const p: HTMLElement | null
// querySelector로 찾으면 Element | null 로 나타난다.
const p = document.getElementById('msg-out');
// 1번은 p라는 엘리먼트를 찾기 때문에 HTMLParagraphElement라는 것을 알지만
// 2번은 typescript가 id값이 msg-out 이라는 요소가 어떤 요소인지 알지 못하므로
// 특정 HTML엘리먼트를 가리키지 못한다.
// const inputEl = <HTMLInputElement>document.querySelector('#input');
const inputEl = document.querySelector('#input');
inputEl.value = 'Hi theres';
// notion: https://www.notion.so/type-casting-9aecd365d3a1404c8b09ab6f361595de
