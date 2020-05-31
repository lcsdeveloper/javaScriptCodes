import Ingredient from "./ingredient.js";
import Fridge from "./fridge.js";
const ingredients = [
  water,
  olive_oil,
  broth,
  red_wine,
  bay_leaf,
  pepercorn,
  beef,
  chicken,
  bacon,
  pineapple,
  apple,
  blueberry,
  mushroom,
  carrot,
  potato,
  egg,
  cheese,
  sauce,
  oatmeal,
  brown_rice,
  cheese,
  sauce,
];

let Frigidaire = new Fridge(ingredients);
let vegetables = Frigidaire.get(Ingredient.vegetable);

console.log(vegetables);
