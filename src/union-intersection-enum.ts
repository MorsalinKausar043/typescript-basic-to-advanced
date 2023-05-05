
// used on interface 
// interface personType{
//     name:string,
//     age:number,
//     student:boolean
// }

// used on type 
type personType = {
    name: string,
    age: number,
    student: boolean
}

interface salaryType {
    salary?: number;
}

const person: personType | salaryType = {
    name: "morsalin",
    age: 20,
    student: true
}

console.log(person)

// work on ts function ------------------------------->
type operatorType = (num1: number, num2: number) => number
const counting = (num1: number, num2: number, operator: operatorType) => operator(num1, num2);

console.log(counting(2, 5, (x, y) => x + y))