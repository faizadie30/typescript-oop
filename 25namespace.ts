//example use class or variable same with another file
namespace ExampleNameSpace {
  //animal class name same with file 00class.ts
  export class Animal {}

  export const frog = new Animal();
  //note: function export for use class in namespace, in outer name space
}

//call class and variable in outer namespace
const Dog = new ExampleNameSpace.Animal();
let frog2 = ExampleNameSpace.frog;

console.log("dog:", Dog);
console.log("frog2:", frog2);
