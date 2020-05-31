export default class Fridge {
  constructor(ingredients) {
    this.items = ingredients;
  }
  get(type) {
    return this.items.filter(i => i.type == type, 0);
  }
}
