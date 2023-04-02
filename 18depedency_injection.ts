class Store {
  private name: string = "Store Merapi";
  private profit: number = 25000;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profit;
  }
}

class FashionProduct {
  private store: Store;
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;

    this.store = new Store();
  }

  sell(): void {
    console.log(
      `${this.name} total price with profit ${
        this.price + this.store.getProfit()
      }`
    );
  }
}

const populerTshirtScreamous = new FashionProduct("Screamous", 85000);
// populerTshirtScreamous.sell(); running if check result or console

//note: in top with normal case or not dynamic store, is not problem, but store is dynamic automatic raises issue or case, okey example dynamic store availabel in bottom

//using interface dependency injection for dynamic class
interface IStore {
  name: string;
  profit: number;
  getProfit(): number;
  getName(): string;
}

class StoreMerapi implements IStore {
  name: string = "Merapi";
  profit: number = 25999;
  getProfit(): number {
    return this.profit;
  }

  getName(): string {
    return this.name;
  }
}

class StoreBromo implements IStore {
  name: string = "Bromo";
  profit: number = 30999;
  getProfit(): number {
    return this.profit;
  }

  getName(): string {
    return this.name;
  }
}

class WalletProduct {
  private store: IStore;
  private name: string;
  private price: number;
  constructor(store: IStore, name: string, price: number) {
    this.name = name;
    this.price = price;
    this.store = store;
  }

  sell(): void {
    console.log(
      `${this.name} total price with profit ${
        this.price + this.store.getProfit()
      }`
    );
  }
}

class SportProduct {
  private store: IStore;
  private name: string;
  private price: number;
  constructor(store: IStore, name: string, price: number) {
    this.name = name;
    this.price = price;
    this.store = store;
  }

  sell(): void {
    console.log(
      `${this.name} total price with profit ${
        this.price + this.store.getProfit()
      }`
    );
  }
}

const merapiStoreDefine = new StoreMerapi();
const bromoStoreDefine = new StoreBromo();

//example dependency injection or dynamic class in interface with difference store and same product
const walletProductDefineInMerapiStore = new WalletProduct(
  merapiStoreDefine,
  "armadillo wallet x dinosaur",
  1000000
);
walletProductDefineInMerapiStore.sell();

const walletProductDefineInBromoStore = new WalletProduct(
  bromoStoreDefine,
  "armadillo wallet x dinosaur",
  1000000
);
walletProductDefineInBromoStore.sell();

const sportProductDefineInMerapiStore = new SportProduct(
  merapiStoreDefine,
  "training tshirt armadillo",
  150000
);
sportProductDefineInMerapiStore.sell();

const sportProductDefineInBromoStore = new SportProduct(
  bromoStoreDefine,
  "training tshirt armadillo",
  150000
);
sportProductDefineInBromoStore.sell();
