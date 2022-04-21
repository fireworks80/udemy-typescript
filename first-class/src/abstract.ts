abstract class MyAbClass {
  constructor(protected id: string) {}
  abstract describe(): void;
}

class InheritClass extends MyAbClass {
  constructor(id: string) {
    super(id);
  }
  describe() {
    console.log(this.id);
  }
}

const inherit = new InheritClass('hello');
inherit.describe();