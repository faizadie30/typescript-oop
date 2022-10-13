/* infromation in famous on people call immutable */
class Person {
  readonly Gender: string = 'male';
}

const getPerson = new Person();
// getPerson.Gender = 'female' //result = error, because gender type read only
console.log(getPerson.Gender);

/* 
information: readonly use on class parent only!
*/
