"use strict";
class bankAccount {
    constructor(name, age, _balance) {
        this.name = name;
        this.age = age;
        this._balance = _balance;
    }
    ;
    getBalance() {
        return this._balance;
    }
    ;
    test() {
        return this.getBalance();
    }
    // getters  
    get getDeposit() {
        return this._balance;
    }
    ;
    // setters  
    set setDeposit(num) {
        this._balance = this._balance * num;
    }
}
;
const myAccount = new bankAccount("muhammad", 63, 500);
console.log(myAccount);
myAccount.setDeposit = 20;
console.log(myAccount);
