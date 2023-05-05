class persons{
    takeNap():void{
        console.log('I am sleeping 7 ours per day!')
    }
};

class student extends persons{
    takeNap(): void {
        console.log('I am sleeping 9 ours per day!')
    }
};

class developer extends persons{
    takeNap(): void {
        console.log("I am sleeping 4 ours per day!")
    }
};

function getNap(param:persons){
    param.takeNap();
}

const oneStudent = new student();
const oneDeveloper = new developer();
const onePerson = new persons();
getNap(oneStudent)
getNap(oneDeveloper)
getNap(onePerson)