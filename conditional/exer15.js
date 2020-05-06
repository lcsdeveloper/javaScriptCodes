let payment, price = 1500,
    taxes = 0.8,
    time = 2;

payment = price + ( price * ( taxes / 100 ) * time );

console.log( payment );