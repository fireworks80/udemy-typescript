"use strict";
var DepartmentPrivate = /** @class */ (function () {
    function DepartmentPrivate(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        // this.name = name;
    }
    DepartmentPrivate.prototype.describe = function () {
        console.log("Department ".concat(this.id, ": ").concat(this.name));
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
var accountingPrivate = new DepartmentPrivate('sales', 'Accounting');
accountingPrivate.describe();
accountingPrivate.addEmployee('Max');
accountingPrivate.addEmployee('Manu');
// accountingPrivate.printEmployeeInformation();
// class 안에서 private으로 설정한 프로퍼티는 class안에서는 접근이 가능 하지만.
// class 바깥에서는 접근 할 수 없다.
// accountingPrivate.employees[2] = 'Anna';
//# sourceMappingURL=private-public.js.map