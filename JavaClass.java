public abstract class Animal {
  private String sound = "";

  public getSound(): string
}

public class Dog extends Animal {
  public getSound() {
    return this.sound;
  }
}