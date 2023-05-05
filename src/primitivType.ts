// primitive type are:
// 1. string 
// 2. number 
// 3. boolean
// 4. null 
// 5. undefined

// const userName: string = "Morsalin Kausar";
// const ages: number = 20;
// const student: boolean = true;
// const names: string[] = ["kausar", "jakir", "ayub", "pranto", "robin", "badhon"];

// console.log(`My name is ${userName}. I'm ${ages} years old and I'm ${!student ? "not Student" : "Student"}.`)
// console.log("primitive data types")

const allUsers:string[] = ["kausar", "jakir", "pranto", "ayub", "adnan"];

// create map function
allUsers.map((val) => console.log(val))

// write a function find the average two numbers
const total = <X,Y>(num1:X,num2:Y) :[X,Y] =>{
    return [num1,num2]
};


