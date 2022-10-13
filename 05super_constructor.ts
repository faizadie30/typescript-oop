class Animal4 {
  name: string = '';
  foot: number = 0;
  mammal: boolean = false;

  constructor(name: string, foot: number, mammal: boolean) {
    this.name = name;
    this.foot = foot;
    this.mammal = mammal;
  }
}

class SharkFromAnimal4 extends Animal4 {
  toxic: boolean = false;
  constructor(name: string, foot: number, mammal: boolean, toxic: boolean) {
    super(name, foot, mammal);
    this.toxic = toxic;
  }
}

const sharkCategory = new SharkFromAnimal4('megalodon', 0, true, false);
console.log(sharkCategory);
