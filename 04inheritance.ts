class Animal5 {
  name: string = '';
  foot: number = 0;
  mammal: boolean = false;

  breathe(isStatus: boolean) {
    const isBreath = isStatus;
    if (isBreath) {
      console.log(`${this.name} is breathing`);
    } else {
      console.log(`${this.name} is death`);
    }
  }
}

class SharkFromAnimal5 extends Animal5 {
  bodyColor: string = 'blue ocean';
}

const sharkAnimal5 = new SharkFromAnimal5();
sharkAnimal5.name = 'megalodon';
sharkAnimal5.foot = 0;
sharkAnimal5.mammal = false;
console.log('shark Type:', sharkAnimal5);
sharkAnimal5.breathe(false);

/* use class in class or parent child inheritance class */
