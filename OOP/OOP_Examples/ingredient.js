export default class Ingredient {
  constructor(name, type, calories) {
    this.name = name;
    this.type = type;
    this.calories = calories;
    this.minutes = {
      fried: 0,
      boiled: 0,
      baked: 0,
    };
  }

  static meat = 0;
  static vegetable = 1;
  static fruit = 2;
  static egg = 3;
  static sauce = 4;
  static grain = 5;
  static cheese = 6;
  static spice = 7;
};