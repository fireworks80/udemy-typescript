"use strict";
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('max', ' schwarz');
console.log(result.split(' '));
console.log(add(10, 3));
