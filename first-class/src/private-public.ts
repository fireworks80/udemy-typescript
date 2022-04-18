class DepartmentPrivate {
  private employees: string[] = [];

  constructor(private id: string, private name: string) {
    // this.name = name;
  }

  describe(this: DepartmentPrivate) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accountingPrivate = new DepartmentPrivate('sales', 'Accounting');
accountingPrivate.describe();

accountingPrivate.addEmployee('Max');
accountingPrivate.addEmployee('Manu');
// accountingPrivate.printEmployeeInformation();

// class 안에서 private으로 설정한 프로퍼티는 class안에서는 접근이 가능 하지만.
// class 바깥에서는 접근 할 수 없다.
// accountingPrivate.employees[2] = 'Anna';
