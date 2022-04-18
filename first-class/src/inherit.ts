class DepartmentInherit {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: DepartmentInherit) {
    console.log(`DepartmentInherit (${this.id}): ${this.name}`);
  }
}

class ITDepartment extends DepartmentInherit {
  constructor(id: string) {
    super(id, 'IT');
  }
}

class AccountingDepartment extends DepartmentInherit {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addReport(text: string) {
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
