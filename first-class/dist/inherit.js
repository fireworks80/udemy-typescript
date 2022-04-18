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
var DepartmentInherit = /** @class */ (function () {
    function DepartmentInherit(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    DepartmentInherit.prototype.describe = function () {
        console.log("DepartmentInherit (".concat(this.id, "): ").concat(this.name));
    };
    return DepartmentInherit;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id) {
        return _super.call(this, id, 'IT') || this;
    }
    return ITDepartment;
}(DepartmentInherit));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(DepartmentInherit));
var itDepartMent = new ITDepartment('12');
itDepartMent.describe();
var accountingIt = new AccountingDepartment('d2', []);
accountingIt.addReport('Something went wrong...');
accountingIt.printReports();
//# sourceMappingURL=inherit.js.map