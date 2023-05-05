// const firstWord: any = "hello world!";
// const x = (firstWord as string).split("")
// console.log(x)

// // key of generic 
// type person ={
//     name:string,
//     age:number,
//     student:true
// };

// type newType = "name" | "age" | "student";

// type newPerson = keyof person;
// const a:newPerson = "student";

// function getUser<X,Y extends keyof X>(obj:X,key:Y){
//     return obj[key]
// };

// const users = getUser({name:"programming hero", age:2}, "age");
// console.log(users)

const getUser = <X,Y extends keyof X>(obj:X, key:Y) => obj[key];

const newUser = getUser({name:"muhammad", age:63}, "name");
console.log(newUser);
