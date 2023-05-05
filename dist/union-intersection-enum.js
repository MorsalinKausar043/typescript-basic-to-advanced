"use strict";
// used on interface 
// interface personType{
//     name:string,
//     age:number,
//     student:boolean
// }
const person = {
    name: "morsalin",
    age: 20,
    student: true
};
console.log(person);
const counting = (num1, num2, operator) => operator(num1, num2);
console.log(counting(2, 5, (x, y) => x + y));
