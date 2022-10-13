class Animal5 {
  name: string = '';

  breathe() {
    console.log('breathe forever');
  }
}

class SharkFromAnimal5 extends Animal5 {
  breathe() {
    console.log('no breathe becuase animal is death');
  }
}

const sharkType5 = new SharkFromAnimal5();
sharkType5.breathe();
