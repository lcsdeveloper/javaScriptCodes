

const hummus = function(factor){
    const ingredient = function(amount, unit, name){
        let ingredientAmount = amount * factor; //ingredientAmount is only viseble inside of ingredient func its a local variable
        if(ingredientAmount > 1){
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    }
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup","lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2,"tablespoon","olive oil");
    ingredient(0.25, "teaspoon", "cumin");
}

hummus(1);//calling the func