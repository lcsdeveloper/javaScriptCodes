let jornal = [];

function addEntry(events, squirrel) {
  jornal.push({ events, squirrel });
}

console.log(jornal);

addEntry(["work", "thouched tree", "pizza", "running", "television"], false);
addEntry(
  [
    "work",
    "ice cream",
    "cauliflower",
    "lasagna",
    "touched tree",
    "brushed teeth"
  ],
  false
);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);
