"use strict";
class MyAbClass {
    constructor(id) {
        this.id = id;
    }
}
class InheritClass extends MyAbClass {
    constructor(id) {
        super(id);
    }
    describe() {
        console.log(this.id);
    }
}
const inherit = new InheritClass('hello');
inherit.describe();
