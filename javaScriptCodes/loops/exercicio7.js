let size = 8,
    board = "";

for (i = 0; i <= size; i++) {
  for (y = 0; y <= size; y++) {
    if ((y + i) % 2 == 0) {
      console.log((board += "#"));
    } else {
      console.log((board += " "));
    }
  }
  board += "\n";
}
