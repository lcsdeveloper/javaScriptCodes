let enumerable = {
    property: 1,
    method: () => {}
};

for ( let key of Object.keys( enumerable ) ) console.log(key);

for (let value of Object.values(enumerable)) console.log(value);

for (let entry of Object.entries(enumerable)) console.log(entry);