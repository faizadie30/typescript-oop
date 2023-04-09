// when to use interface
// use interface in class

// when to use type
// use type in variable or function

//why declaring no use interface in function or variable, because architecture or basepractice or consistency in style code so same with another programmer

// =============================================================================
// in interface there is method merge, okey example in bottom
// note: interface is require object value

interface SetInterfaceUser {
  name: string;
}

interface SetInterfaceUser {
  birthOfDay: string;
}

class User implements SetInterfaceUser {
  name: string;
  birthOfDay: string;

  constructor(name: string, birthOfDay: string) {
    this.name = name;
    this.birthOfDay = birthOfDay;
  }
}
// if name interface it's same, auto merge

// =============================================================================
// in type there is method intersection , okey example in bottom
// note: type there is no object and object value
type name = string;

type UserType = {
  name: string;
  age: number;
};

// there is methode or and in type for call decalre type previously
type user = name | UserType;

const UserList: user = { age: 10, name: "udin" };
