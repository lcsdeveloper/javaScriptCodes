import print from "./print.js";
import Ingredient from "./ingredient.js";

export default class FoodFactory {
  constructor() {}
}

FoodFactory.make = function (what) {
  return new Ingredient(what.name, what.type, what.calories);
};
