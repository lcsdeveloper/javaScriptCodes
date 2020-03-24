
function countDown(numero) {
    
  console.log(numero);

  let nextNumber = numero - 1;
  if (nextNumber > 0) {
    countDown(nextNumber); //calling the func again inside the func
  }
}

countDown(10);
