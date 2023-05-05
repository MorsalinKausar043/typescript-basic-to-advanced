// const money: Array<number> = [500, 1000, 1500];
// console.log(money);

// // functional generic type -------------->

// type moneyType<T> = Array<T>
// const moneys: moneyType<number> = [8, 7, 60, 100]
// console.log(moneys)

// // generic type in function  ------------>

// const createArray = <X, Y>(num1: X, num2: Y): [X, Y] => {
//     return [num1, num2]
// };

// const arrayAll = createArray<string, string>("Morsalin", "Kausar");
// console.log(arrayAll)

// // create another --------------------->

// const totalNum = <X, Y>(num1: X, num2: Y): [X, Y] => {
//     return [num1, num2]
// };

// let totalInput = totalNum<number, number>(4, 5);

// console.log(totalInput);

// crush my mind set name --------------------------->
// const crushMindSet = <T>(myInfo: T) => {
//     const crush: string = "shrea ghoshal";
//     const data = { ...myInfo, crush }
//     return data

// };

// const myInfo = {
//     name: "morsalin",
//     age: 20,
//     student: true
// };

// interface crushMindSetType { name: string, age: number, student: boolean }
// const result = crushMindSet<crushMindSetType>(myInfo);
// console.log(result);
