interface Vehicle {
  name: string;
  wheels: number;
}

interface Car extends Vehicle {
  doors: number;
}

class Avanza implements Car {
  name: string = "Avanza velos";
  wheels: number = 4;
  doors: number = 4;
}

// interface support for derivative interface
