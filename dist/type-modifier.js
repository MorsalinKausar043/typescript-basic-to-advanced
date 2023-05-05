"use strict";
class manPowers {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getManPowers() {
        return `The man name is ${this.name}, he is ${this.age} years and his from ${this.address}.`;
    }
}
;
const singleMan = new manPowers("muhammad", 63, "arab");
// singleMan.     // show only for name and getManpowers function
console.log(singleMan.getManPowers());
