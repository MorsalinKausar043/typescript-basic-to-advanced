"use strict";
class User {
    constructor(name, age, student) {
        this.name = name,
            this.age = age,
            this.student = student;
    }
    ;
    getPerson() {
        console.log(`The name of student is ${this.name} and he is ${this.age} years.`);
    }
}
;
const person1 = new User("muhammad", 20, true);
person1.getPerson();
