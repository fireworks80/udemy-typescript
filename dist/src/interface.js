"use strict";
let user;
user = {
    name: 'Max',
    age: 30,
    greet(desc) {
        console.log(desc + ' ' + this.name);
    }
};
user.greet('Hello there - ');
