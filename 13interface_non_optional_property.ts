interface AndroidPhone {
  name: string;
  menu(): void;
  back(): void;
  home(): void;
}

interface ApplePhone {
  name: string;
  home(): void;
}

class SamsungPhone implements AndroidPhone {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  menu(): void {
    console.log(`success touch menu in phone: ${this.name}`);
  }
  back(): void {
    console.log(`success touch back`);
  }
  home(): void {
    console.log(`success touch home in phone: ${this.name}`);
  }
}

class IphonePhone implements ApplePhone {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  home(): void {
    console.log(`success touch home, and showing your popup!`);
  }
}

class GameSageSaga {
  private phone: AndroidPhone;

  constructor(phone: AndroidPhone) {
    this.phone = phone;
  }

  home() {
    this.phone.home();
  }

  back() {
    console.log("back to dashboard game success!");
  }

  menu() {
    this.phone.menu();
  }

  openGame() {
    console.log("success open game Sage Saga");
  }
}

// test interface for android phone running class GameSageSaga
const samsungSerries = new SamsungPhone("a30s");

const runningGameInSamsung = new GameSageSaga(samsungSerries);
runningGameInSamsung.menu();
runningGameInSamsung.openGame();
runningGameInSamsung.back();
runningGameInSamsung.home();

//test interface for apple phone runnign class GameSageSaga
// const iphoneSerries = new IphonePhone("Iphone 12 Pro Max");
// const runningInIphone = new GameSageSaga(iphoneSerries);
// runningInIphone.back();

// uncomment script in test interface for apple for show case use interface :D

//function interface for result error in code, can't running in terminal
// use visual studio code or another IDE powerfull, and them you have error :)
