function matchingData<T, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

let children = { 0: "udin", 1: "bambang", 2: "paijo", 3: "didi" };

console.log("get name from index 1:", matchingData(children, 1));
console.log("get name from index 0:", matchingData(children, 0));
// console.log("get name from index 4:", matchingData(children, 4));

//note: if you call console.log index 4, result in interface = error, because index 4 not undefine
