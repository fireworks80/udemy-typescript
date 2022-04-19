"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DepartmentProtected = /** @class */ (function () {
    function DepartmentProtected(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    DepartmentProtected.prototype.describe = function () {
        console.log("DepartmentProtected (".concat(this.id, "): ").concat(this.name));
    };
    DepartmentProtected.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    DepartmentProtected.prototype.printEmployee = function () {
        console.log(this.employees);
    };
    return DepartmentProtected;
}());
var ITDepartment2 = /** @class */ (function (_super) {
    __extends(ITDepartment2, _super);
    function ITDepartment2(id) {
        return _super.call(this, id, 'IT') || this;
    }
    return ITDepartment2;
}(DepartmentProtected));
var AccountingDepartment2 = /** @class */ (function (_super) {
    __extends(AccountingDepartment2, _super);
    function AccountingDepartment2(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment2.prototype.addEmployee = function (name) {
        if (name === 'Max')
            return;
        this.employees.push(name);
    };
    AccountingDepartment2.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    AccountingDepartment2.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment2;
}(DepartmentProtected));
var itDepartMent2 = new ITDepartment2('12');
itDepartMent2.describe();
var accountingIt2 = new AccountingDepartment2('d2', []);
accountingIt2.addReport('Something went wrong...');
accountingIt2.printReports();
accountingIt2.addEmployee('Max');
accountingIt2.addEmployee('Manu');
accountingIt2.printEmployee();
var Test = /** @class */ (function () {
    function Test(name) {
        this.name = name;
    }
    Object.defineProperty(Test.prototype, "reSentName", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Test.prototype.printName = function () {
        console.log(this.name, Test.tName);
    };
    Test.tName = 'teresa';
    return Test;
}());
var test = new Test('helo');
test.printName();
//# sourceMappingURL=protected.js.map