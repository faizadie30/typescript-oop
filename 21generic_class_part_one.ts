interface SetGenericClass<T> {
  propA: T;
  methodA(): T;
}

class GenericClass<T> implements SetGenericClass<T> {
  propA: T;

  constructor(prop: T) {
    this.propA = prop;
  }

  methodA(): T {
    return this.propA;
  }
}

const genericClassReturnString = new GenericClass<string>("faiz");
console.log("my name is:", genericClassReturnString.methodA());

const genericClassReturnNumber = new GenericClass<number>(300401);
console.log("birth of day:", genericClassReturnNumber.methodA());
