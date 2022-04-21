"use strict";
class DepartmentProtected {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`DepartmentProtected (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployee() {
        console.log(this.employees);
    }
}
class ITDepartment2 extends DepartmentProtected {
    constructor(id) {
        super(id, 'IT');
    }
}
class AccountingDepartment2 extends DepartmentProtected {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === 'Max')
            return;
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const itDepartMent2 = new ITDepartment2('12');
itDepartMent2.describe();
const accountingIt2 = new AccountingDepartment2('d2', []);
accountingIt2.addReport('Something went wrong...');
accountingIt2.printReports();
accountingIt2.addEmployee('Max');
accountingIt2.addEmployee('Manu');
accountingIt2.printEmployee();
class Test {
    constructor(name) {
        this.name = name;
    }
    get reSentName() {
        return this.name;
    }
    set reSentName(name) {
        this.name = name;
    }
    printName() {
        console.log(this.name, Test.tName);
    }
}
Test.tName = 'teresa';
const test = new Test('helo');
test.printName();
