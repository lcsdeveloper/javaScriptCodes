let protoRabbit = {
    speak(line){
        console.log(`this ${this.type} rabbit says '${line}`)
    }
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "Killer";
killerRabbit.speak("skreeeee!")