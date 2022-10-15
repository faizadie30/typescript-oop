class Animals9 {
  static nameAnimal: string = '';
  static footNumberAnimal: number = 2;
  static CallFrom: string = '';

  static walk() {
    console.log(
      `${this.CallFrom} ${this.nameAnimal}, walk with ${this.footNumberAnimal} foot`
    );
  }

  getFoot() {
    /* example call static property */
    Animals9.walk();
  }
}

/* original get value */
const animal9 = new Animals9();
Animals9.nameAnimal = 'frog';
Animals9.CallFrom = 'example 1:';
animal9.getFoot();

/* if change static variable then the result same with your set value */
const animal9Example2 = new Animals9();
Animals9.nameAnimal = 'got';
Animals9.footNumberAnimal = 4;
Animals9.CallFrom = 'example 2:';
animal9Example2.getFoot();
