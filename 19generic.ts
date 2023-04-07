// no use generic
const SetValue = (value: any) => {
  return value;
};

const getValue1 = SetValue(10);
console.log("getValue1:", getValue1);
// note: if not use generic, case not availabel function origin from javascript
// example function: length, toString,eval, etc

// use generic
type FunctionType = <TValue>(value: TValue) => TValue;
const SetValueGeneric: FunctionType = <TValue>(value) => {
  return value;
};

const getValueGenericWithString = SetValueGeneric<string>("Morning");
console.log("getValueGenericWithString:", getValueGenericWithString);
console.log(
  "Length getValueGenericWithString:",
  getValueGenericWithString.length
);

const getValueGenericWithNumber = SetValueGeneric<number>(30);
console.log("getValueGenericWithNumber:", getValueGenericWithNumber);
console.log(
  "to string getValueGenericWithNumber:",
  getValueGenericWithNumber.toString()
);

// note:
// 1. example in top use arrow function with generic
// 2. symbol TValue in type FunctionType is type flexible in function
// 3. TValue just naming, and support for custom name maybe T OR Type, and global programmer typescript many name T Or Type
// 4. function generic use for get functional from javascript
// 5. use interface, interface in code type
