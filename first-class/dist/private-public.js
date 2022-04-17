"use strict";
var DepartmentPrivate = /** @class */ (function () {
    function DepartmentPrivate(n) {
        this.employees = [];
        this.name = n;
    }
    DepartmentPrivate.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    DepartmentPrivate.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    DepartmentPrivate.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return DepartmentPrivate;
}());
var accountingPrivate = new DepartmentPrivate('Accounting');
accountingPrivate.addEmployee('Max');
accountingPrivate.addEmployee('Manu');
accountingPrivate.printEmployeeInformation();
// class 안에서 private으로 설정한 프로퍼티는 class안에서는 접근이 가능 하지만.
// class 바깥에서는 접근 할 수 없다.
// accountingPrivate.employees[2] = 'Anna';
//# sourceMappingURL=private-public.js.map