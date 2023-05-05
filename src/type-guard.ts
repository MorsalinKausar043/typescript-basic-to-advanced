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
class animal{
    name:string;
    species: string;
    constructor(name: string, species:string){
        this.name = name;
        this.species = species;
    }
    makeSound():void{
    console.log("i'm making sound!")
    }
};

class dog extends animal{
    constructor(name: string, species: string){
        super(name,species)
    }

    dogSound():void{
        console.log("make dog sound")
    }
};

class cat extends animal{
    constructor(name: string, species: string) {
        super(name, species)
    }

    catSound():void{
        console.log("make cat sound")
    }
};

const isDog = (animal : animal) : animal is dog =>{
    return animal instanceof dog;
}

const isCat = (animal: animal) : animal is cat => animal instanceof cat;

const getAnimal = (animal:animal) =>{
    if(isDog(animal)){
        animal.dogSound();
    }
    // else if(animal instanceof cat){ // extra alternative code --------->
    //     animal.catSound();
    // } // extra alternative code --------->
    else if (isCat(animal)) {
        animal.catSound();
    } else {
        animal.makeSound();
    }
};

const animal1 = new dog("jihad islam", "dog");
const animal2 = new cat("dhaka", "cat");
const animal3 = new animal("dhaka", "cat");

getAnimal(animal1);
getAnimal(animal2);
getAnimal(animal3);


