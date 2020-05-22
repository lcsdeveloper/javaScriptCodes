const arrOfUsers = [
  { name: "lucas", surname: "souza", nationality: "BR" },
  { name: "lisa", surname: "beggiato", nationality: "IT" },
  { name: "nicole", surname: "bertolatoo", nationality: "IT" },
  { name: "marcelo", surname: "santos", nationality: "IE" },
  { name: "angela", surname: "maria", nationality: "GR" },
  { name: "arthur", surname: "kzuawi", nationality: "RU" },
  { name: "aline", surname: "souza", nationality: "BR" },
  { name: "chiang", surname: "yang", nationality: "CH" },
];

const getBrazilians = arrOfUsers.filter(user => user.nationality === "BR");
for (user of getBrazilians) {
  console.log(` every brazilians users ${user.name} ${user.surname}`);
}

const getSurnames = arrOfUsers.map(user => user.surname );
console.log(getSurnames)
const arrOfItalians = [];
const getItalians = arrOfUsers.map((user) => {
  if (user.nationality === "IT") {
    arrOfItalians.push(user);
  }
});

console.log(arrOfItalians);

const arrRussians = [];
const getRussians = arrOfUsers.map((user) => {
 if(user.nationality == "RU") return arrRussians.push(user);
});
console.log(arrRussians[0].name);

console.log(typeof arrOfUsers,typeof arrRussians)

