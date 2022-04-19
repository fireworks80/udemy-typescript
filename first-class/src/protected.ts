class DepartmentProtected {
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: DepartmentProtected) {
    console.log(`DepartmentProtected (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployee() {
    console.log(this.employees);
  }
}

class ITDepartment2 extends DepartmentProtected {
  constructor(id: string) {
    super(id, 'IT');
  }
}

class AccountingDepartment2 extends DepartmentProtected {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addEmployee(name: string): void {
    if (name === 'Max') return;
    this.employees.push(name);
  }

  addReport(text: string) {
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
  static tName = 'teresa';

  constructor(private name: string) {}

  get reSentName() {
    return this.name;
  }

  set reSentName(name: string) {
    this.name = name;
  }

  printName() {
    console.log(this.name, Test.tName);
  }
}

const test = new Test('helo');
test.printName();
