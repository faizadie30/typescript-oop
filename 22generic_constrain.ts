function SetGenericNonConstrain<T>(param: T): T {
  // console.log("param:", param);
  return param;
}
const exampleGenericNonConstrain = SetGenericNonConstrain<string>("halo");
console.log("exampleGenericNonConstrain:", exampleGenericNonConstrain);
//example in top, not use function from javascript, maybe use length or empty, if use generic function from javascript not dynamically

//example with dynamic call function javascript with generic
interface Length {
  length: number;
}

function SetGenericWithConstrain<T extends Length>(param: T): T {
  console.log("param length:", param.length);

  return param;
}

//example call type string with function generic constrain
const getNameUser = SetGenericWithConstrain("Udin");
console.log("getNameUser:", getNameUser);

//example call type number with function generic constrain
const getAge = SetGenericWithConstrain({ length: 2, value: 21 });
console.log("getAge:", getAge);

//example call type boolean with function generic constrain
const getIsDropOut = SetGenericWithConstrain({ length: 0, value: false });
console.log("getIsDropOut:", getIsDropOut);
