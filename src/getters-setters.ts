// class bankAccount {
//     public readonly name: string;
//     protected age: number;
//     private _balance: number;
//     constructor(name: string, age: number, _balance: number) {
//         this.name = name;
//         this.age = age;
//         this._balance = _balance;
//     };

//     private getBalance(): number {
//         return this._balance;
//     };

//     test(): number {
//         return this.getBalance();
//     }
//     // getters  
//     get getDeposit(): number {
//         return this._balance;
//     };

//     // setters  
//     set setDeposit(num: number) {
//         this._balance = this._balance * num;
//     }
// };

// const myAccount = new bankAccount("muhammad", 63, 500);

// console.log(myAccount);
// myAccount.setDeposit = 20;
// console.log(myAccount);

// type class and discount product bill  in typescript
class shop{
    private id:number;
    protected bill:number;
    protected name: string;
    constructor(id:number,bill:number,name:string) {
        this.id = id;
        this.bill = bill;
        this.name = name;
    }

    // getters 
    get getBill():number{
        return this.bill;
    }
    // setters  
    set discountBill(disVal:number){
        this.bill = this.bill - (disVal/100) * this.bill;
    }
};

const billOne = new shop(2023,1000,"dhaka");

console.log(billOne.getBill);
billOne.discountBill = 10;
console.log(billOne.getBill);