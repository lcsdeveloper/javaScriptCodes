let objectExample = {
    a: 1,
    b: 2,
    c: 3,
    method: () => {}
};

for (let value in objectExample) console.log(value,objectExample[value]);