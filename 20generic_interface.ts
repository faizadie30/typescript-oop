interface SetGenericInterface<T> {
  A: T;
}
function generictFunctionInterface<T>(value: T): SetGenericInterface<T> {
  let data: SetGenericInterface<T> = {
    A: value,
  };

  return data;
}

console.log("interface bool:", generictFunctionInterface<boolean>(false));
console.log(
  "interface string:",
  generictFunctionInterface<string>("hello world")
);
console.log("interface bool:", generictFunctionInterface<number>(300401));
