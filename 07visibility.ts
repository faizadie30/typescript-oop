class Animal6 {
  public name: string = '';
  private foot: number = 0;
  protected mammal: boolean = false;

  constructor(name: string, foot: number, mammal: boolean) {
    this.name = name;
    this.foot = foot;
    this.mammal = mammal;
  }

  public infoFrog() {
    const data: Object = {
      name: this.name,
      mammal: this.mammal,
      foot: this.foot,
    };
    console.log('info:', data);
  }
}

class FrogFromAnimal6 extends Animal6 {
  private eggAge: number = 4;
  private tedpolAge: number = 7;
  private frogAge: number = 90;

  constructor(name: string, foot: number, mammal: boolean) {
    super(name, foot, mammal);
  }

  getAge() {
    console.log('total age frog:', this.eggAge + this.tedpolAge + this.frogAge);
  }
}

const frogData = new FrogFromAnimal6('bangkong', 2, false);
frogData.getAge();
frogData.infoFrog();

/* 
public = use in children class and the class
private = use in the class only
protected = use in the class only and child class with extends
*/
