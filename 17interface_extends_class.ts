class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// extends animal, get from class, because typescript support implement class in interface
interface IFish extends Animal {
  mamal: boolean;
  swim(): void;
}

class Shark implements IFish {
  //name defined from class animal
  name: string;

  //mamal defined from interface IFish
  mamal: boolean;

  constructor(name: string, mamal: boolean) {
    this.name = name;
    this.mamal = mamal;
  }

  swim(): void {
    console.log(`shark ${this.name} is swiming`);
  }
}

const wingheadShark = new Shark("winghead shark", true);
console.log("name:", wingheadShark.name);
console.log("mamal:", wingheadShark.mamal);
wingheadShark.swim();
