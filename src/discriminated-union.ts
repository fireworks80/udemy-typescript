interface Bird {
  // 4.인터페이스 별로 공통 키로 쓰일 타입을 지정 후 개별적인 값을 갖도록 리터럴 타입을 지정한다.
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  //1. animal.flyingSpeed; // 모든 animal이 flyingSpeed를 갖고 있지 않아 오류발생

  //2. 오타가 날 수도 있고, type 이 추가 될 때마다 더많은 확인 사항이 생길 수 있다.
  // if ('flyingSpeed' in animal) {
  //   console.log(animal.flyingSpeed);
  // }
  
  //3. 작동 하지 않는다. 인터페이스가 js로 컴파일 되지 않기 때문에
  // if (animal instanceof Bird) {
  //     console.log(animal.flyingSpeed);
  // }

  // 4. 각 인터페이스 들에 공통의 타입을 지정해준다.
  switch (animal.type) {
    case 'bird':
      speed = 10;
      break;
    case 'horse':
      speed = 30;
  }

  console.log('Moving with speed: ' + speed);
}

// moveAnimal({flyingSpeed: 10});

// Bird 또는 Horse 인터페이스 외에는 갖지 못한다.
moveAnimal({type: 'bird', flyingSpeed: 10});

// notion: https://www.notion.so/acb1fc94658e4025bef3f9b3cf29c062