const  pot = function (numero, potencia){
    let result = 1;

    for(let i = 0; i < potencia; i++){
        result *= numero;
    }
    return result;
};

const pot2 = (numero, potencia) => {return Math.pow(numero, potencia)};
