// class Counter{
//     static counter:number = 0;

//     // static increment 
//     static increment():number{
//         return Counter.counter = Counter.counter + 1;
//     }

//     // static decrement 
//     static decrement():number{
//         return Counter.counter = Counter.counter -1;
//     }
// };

// console.log(Counter.increment());
// console.log(Counter.decrement());


class Counter{
    static counter:number = 0;

    static increment(num:number){
        return Counter.counter = Counter.counter + num;
    }

    static decrement(num:number){
        return Counter.counter = Counter.counter -num;
    }
};

console.log(Counter.increment(3))
console.log(Counter.decrement(2))