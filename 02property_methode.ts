class Animal3 {
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

const animal3 = new Animal3();
animal3.name = 'cow';
animal3.foot = 2;
animal3.mammal = true;
console.log('animal:', animal3);
animal3.breathe(false);
