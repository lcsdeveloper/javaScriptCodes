let n = 7;
let ar = [2, 1, 2, 4, 1, 2];

function sockMerchant(n, ar) {
  let socks = {};
  let pairs = 0;

  for (let element of ar) {
    socks[element] = socks[element] + 1 || 1;
    if (socks[element] % 2 === 0) {
      pairs += 1;
    }
  }

  return pairs;
}

console.log(sockMerchant(n, ar));
