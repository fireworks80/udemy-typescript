"use strict";
// interface =========
// interface Admin {
//   name: string;
//   privilieges: string[];
// }
// interface Employee {
//   name: string;
//   startDate: Date;
// }
// interface 일 경우 위의 인터섹션을 사용하거나
// 아래의 extends를 사용해서 정의 해도 된다.
// interface ElevatedEmployee extends Admin, Employee {}
const e1 = {
    name: 'Max',
    privilieges: ['create-server'],
    startDate: new Date()
};
// 인터섹션 연산자: &
// 어떤 타입과도 사용 가능
// 1. 유니언 타입은 유니언 타입의 공통점이 되는 타입으로 설정
// 2. 객체 타입은 객체 속성들의 합
// ===========================
// type guard
// ===========================
function add(a, b) {
    // return a + b;// error
    if (typeof a === 'string' || typeof b === 'string') { // type guard
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log(`Name: ${emp.name}`);
    // console.log(`Privilieges: ${emp.privilieges}`); // Employee type 에는 privilieges 타입이 없어서 오류발생
    if ('privilieges' in emp) {
        console.log(`privilieges: ${emp.privilieges}`);
    }
    if ('startDate' in emp) {
        console.log(`StartDate: ${emp.startDate}`);
    }
}
// printEmployeeInformation(e1);
// class 일경우
class Car {
    drive() {
        console.log('drive....');
    }
}
class Truck {
    drive() {
        console.log('Drive truck...');
    }
    loadCarGo() {
        console.log('loading car go...');
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // if ('loadCarGo' in vehicle) {
    //   vehicle.loadCarGo();
    // }
    // 또는
    // interface로 Car, Truck를 선언 할 수 없는 이유는
    // 런타임시 interface는 없어지는 부분이므로 사용 할 수 없다
    if (vehicle instanceof Truck) {
        vehicle.loadCarGo();
    }
}
useVehicle(v1);
useVehicle(v2);
