"use strict";
// type values = string | number;
// const valuesTotal = (number1: values, number2:values) : values =>{
//     if(typeof number1 === "number" && typeof number2 === "number"){
//         return number1 + number2 
//     }else{
//         return number1.toString() + number2.toString();
//     }
// };
// const firstVal = valuesTotal(80,33);
// const secondVal = valuesTotal("2", "2");
// console.log(firstVal);
// console.log(secondVal);
// used on opp -------------->
class animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log("i'm making sound!");
    }
}
;
class dog extends animal {
    constructor(name, species) {
        super(name, species);
    }
    dogSound() {
        console.log("make dog sound");
    }
}
;
class cat extends animal {
    constructor(name, species) {
        super(name, species);
    }
    catSound() {
        console.log("make cat sound");
    }
}
;
const isDog = (animal) => {
    return animal instanceof dog;
};
const isCat = (animal) => animal instanceof cat;
const getAnimal = (animal) => {
    if (isDog(animal)) {
        animal.dogSound();
    }
    // else if(animal instanceof cat){ // extra alternative code --------->
    //     animal.catSound();
    // } // extra alternative code --------->
    else if (isCat(animal)) {
        animal.catSound();
    }
    else {
        animal.makeSound();
    }
};
const animal1 = new dog("jihad islam", "dog");
const animal2 = new cat("dhaka", "cat");
const animal3 = new animal("dhaka", "cat");
getAnimal(animal1);
getAnimal(animal2);
getAnimal(animal3);
