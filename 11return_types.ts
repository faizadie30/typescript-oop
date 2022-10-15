class Animals10 {
  private name: string = '';
  private foot: number = 0;

  constructor(name: string, foot: number) {
    this.name = name;
    this.foot = foot;
  }

  /* if type property number */
  getFoot(): number {
    return this.foot;
  }

  /* if type property string */
  getName(): string {
    return this.name;
  }

  /* if not return something, use type void */
  consoleData(): void {
    console.log(this.foot);
  }

  /* if async function */
  async getInfoNonObj(): Promise<string> {
    return this.name;
  }

  /* if obj function */
  getInfoObjNoAsync(): Object {
    return {
      name: this.name,
      foot: this.foot,
    };
  }

  async getInfoObjAsync(): Promise<Object> {
    return {
      name: this.name,
      foot: this.foot,
    };
  }
}

const getAnimals = new Animals10('frog', 2);
const infoAnimals = getAnimals
  .getInfoObjAsync()
  .then((response) => {
    console.log('response:', response);
  })
  .catch((err) => {
    console.log('err:', err);
  });
