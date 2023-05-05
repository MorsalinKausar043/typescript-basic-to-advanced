class bankAccount {
    public readonly name: string;
    protected age: number;
    private _balance: number;
    constructor(name: string, age: number, _balance: number) {
        this.name = name;
        this.age = age;
        this._balance = _balance;
    };

    private getBalance(): number {
        return this._balance;
    };

    test(): number {
        return this.getBalance();
    }
    // getters  
    get getDeposit(): number {
        return this._balance;
    };

    // setters  
    set setDeposit(num: number) {
        this._balance = this._balance * num;
    }
};

const myAccount = new bankAccount("muhammad", 63, 500);

console.log(myAccount);
myAccount.setDeposit = 20;
console.log(myAccount);