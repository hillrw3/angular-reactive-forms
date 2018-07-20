export class Dog {
  constructor(
    public name: string,
    public sex: string,
    public hasHair: boolean,
    public weight: number,
    public hairColor?: CoatColor
  ) {}
}

export enum CoatColor {
  BROWN = "brown",
  RED = "red",
  GOLD = "gold",
  YELLOW = "yellow",
  CREAM = "cream",
  BLACK = "black",
  BLUE = "blue",
  GRAY = "gray",
  WHITE = "white"
}
