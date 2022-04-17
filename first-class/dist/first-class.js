"use strict";
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    // typescript에서는 매개 변수로 this를 전달 할 수 있는데..
    // 이것은 describe()에서 매개 변수를 전달 하지 않고도 describe를 호출 할 수 있다.
    // 대신 typescript는 this가 무엇으로 참조되어야 하는지 인식한다.
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    return Department;
}());
var accounting = new Department('Accounting');
accounting.describe();
var accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// 오류가 나는 원인은
//accountingCopy 에서 describe()를 호출 하면서
// Department의 인스턴스에서 호출한것이 아니기 때문에 Department 의 describe(this)가 위반이 됨
// 따라서 accountingCopy 객체에 name이라는 속성을 추가해서 해결한다.
accountingCopy.describe();
//# sourceMappingURL=first-class.js.map