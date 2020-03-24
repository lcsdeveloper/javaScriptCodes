let salary = 1001, newSalary = 0;

if (salary < 500){
    newSalary = salary * 1.15;
} else if (salary <= 1000){
    newSalary = salary * 1.10;
} else {
    newSalary = salary * 1.05;
}

console.log(newSalary);