interface UserInterface {
  readonly name: string;
  readonly age: number;
  address: string;
}

const userData: UserInterface = {
  name: "Udin",
  age: 40,
  address: "Street walk street",
};

// userData.name = "udin";
// note userData.name recallback error in IDE, because readonly supported insert value in first only
console.log("read only:", userData);
//no used readonly
userData.address = "Wall street";
console.log("update address not read only:", userData);
