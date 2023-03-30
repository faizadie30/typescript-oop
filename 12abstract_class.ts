abstract class Animals11 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  makan(): void {
    console.log(`${this.name} eating`);
  }

  abstract bergerak(): void;
}

class Kucing11 extends Animals11 {
  constructor() {
    super("kucing");
  }

  bergerak(): void {
    console.log("kucing jalan");
  }
}

class Burung11 extends Animals11 {
  constructor() {
    super("burung");
  }

  bergerak(): void {
    console.log("burung terbang");
  }
}

const kucing11 = new Kucing11();
const burung11 = new Burung11();
console.log("kucing:", kucing11);
kucing11.bergerak();
console.log("burung:", burung11);
burung11.bergerak();
