interface InterfaceProduct {
  sell(): void;
}

class CarProduct implements InterfaceProduct {
  sell(): void {
    console.log("release car for customer");
  }
}

class TruckProduct implements InterfaceProduct {
  sell(): void {
    console.log("release Truck for customer");
  }
}

function sellProducts<T extends InterfaceProduct>(products: T[]): void {
  products.map((value: T, index: number) => {
    return value.sell();
  });
}

const sellingTruck = new TruckProduct();
const sellingCar = new CarProduct();

sellProducts([sellingTruck, sellingCar, sellingCar]);
// note multiple or array type calling in 1 function
// amazing typescript :D
