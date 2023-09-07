type Animal = {
  sound: string;
  getSound: () => string
}

class Dog implements Animal {
  sound: string = "Auaua"

  constructor(asdasd) {
    this.sound = asdasd
  }

  public getSound = () => {
    return this.sound
  };
}

const dog = new Dog("auau");


dog.getSound