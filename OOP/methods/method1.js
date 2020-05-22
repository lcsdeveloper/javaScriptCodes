let rabbit = {};

function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };

whiteRabbit.speak("oh my ears and whiskers, " + "how late it is getting!");
hungryRabbit.speak("I could use a carrot right now.")

speak.call(hungryRabbit, "Burp")

