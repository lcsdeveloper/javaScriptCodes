let data = [];

async function getData(){
    const res = await fetch('https://randomuser.me/api');

    const data = await res.json();

    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        phone: user.phone,
        nationality: user.nat
    }

    addData(newUser);
}

function addData(newUser){
    data.push(newUser);
}

for(let i=0;i<5;i++){
    getData();
}

console.log(data);