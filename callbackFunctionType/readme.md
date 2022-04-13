# callback type

```
// 콜백함수 타입도 함수 타입과 마찬가지로 설정한다.
// 하지만 리턴타입까지 강제하지는 않는다.
// 실제 callback 함수에서 return을 해도 오류는 발생 하지 않는다.
function handler(n1: number, n2: number, cb: (num: number) => void) {
  cb(n1 + n2);
}

handler(1, 3, (result) => {
  return result + 1;
});
```

`tsc app.ts` 후 `handler`함수가 빨간줄이 생기는데, 컴파일된 js 파일에 같은 이름의
함수가 있어서 생기는 오류
