/* Methode script 1 */
class Animal4A {
  name: string = '';
  foot: number = 0;
  mammal: boolean = false;
  constructor(name: string, foot: number, mammal: boolean) {
    this.name = name;
    this.foot = foot;
    this.mammal = mammal;
  }
}
const animal4A = new Animal4A('lion', 4, true);
console.log('animal 1:', animal4A);

/* Methode script 2, not difference functional with methode 1 */
class Animal4B {
  constructor(
    public name: string,
    public foot: number,
    public mammal: boolean
  ) {}
}
const animal4B = new Animal4B('dragon', 4, false);
console.log('animal 2:', animal4B);

/* 
difference with file 02property_methode.ts in constructor 
use for store all data condition on class

explanation: low space because use constructor on class and 
            simple call class with params
*/
