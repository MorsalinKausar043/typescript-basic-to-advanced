"use strict";
// class User{
//     name:string;
//     age:number;
//     student: boolean;
//     constructor(name:string,age:number,student:boolean){
//         this.name = name,
//         this.age = age,
//         this.student = student;
//     };
//     getPerson(): void{
//         console.log(`The name of student is ${this.name} and he is ${this.age} years.`)
//     }
// };
// const person1 = new User("muhammad",20,true);
// person1.getPerson();
class user {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getPerson() {
        return `The student name is ${this.name} and he is ${this.age} years old. He's from ${this.address}.`;
    }
}
;
class wentUser extends user {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    getWentUser() {
        return `${this.getPerson()} He's went for the last ${this.designation}.`;
    }
}
const person1 = new wentUser("muhammad", 49, "dhaka", "7 days ago");
console.log(person1.getWentUser());
