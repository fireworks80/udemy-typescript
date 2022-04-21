"use strict";
class DepartmentInherit {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`DepartmentInherit (${this.id}): ${this.name}`);
    }
}
class ITDepartment extends DepartmentInherit {
    constructor(id) {
        super(id, 'IT');
    }
}
class AccountingDepartment extends DepartmentInherit {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const itDepartMent = new ITDepartment('12');
itDepartMent.describe();
const accountingIt = new AccountingDepartment('d2', []);
accountingIt.addReport('Something went wrong...');
accountingIt.printReports();
