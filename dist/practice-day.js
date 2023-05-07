"use strict";
// 1. Convert the following JavaScript array into a TypeScript tuple 
// const userInfo: [number, string, string, boolean, undefined, string] = [101, "Ema", "John", true, , "2023"];
// 2. Write a TypeScript function that takes in two arrays of numbers as parameters.The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays. 
// const compareArrays = (array1: number[], array2: number[]): number[] => {
//     const result: number[] = [];
//     for (let i = 0; i < array1.length; i++) {
//         const num = array1[i];
//         if (array2.includes(num)) {
//             result.push(num)
//         }
//     }
//     return result;
// };
// const array1 = [2, 4, 5, 9];
// const array2 = [1, 4, 6, 9];
// compareArrays(array1, array2)
// // console.log(compareArrays(array1, array2))
// 3. You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value. 
// define productType 
// interface productType {
//     id: number,
//     name: string,
//     price: number,
//     category: string
// };
// // Define the Products array
// const products: productType[] = [
//     { id: 1, name: 'chips', price: 10, category: 'food' },
//     { id: 2, name: 'apple', price: 20, category: 'fruit' },
//     { id: 3, name: 't-shirt', price: 30, category: 'cloth' },
//     { id: 4, name: 'pine-apple', price: 40, category: 'fruit' },
//     { id: 5, name: 'mango', price: 50, category: 'fruit' }
// ];
// // Define the criterion and value to filter by
// const criterion = 'category';
// const value = 'Category B';
// // Use Array.filter() to filter the Products array
// const searchProduct = <T extends productType>(productArr: T[], criteria: keyof T, value: string | number): T[] | string => {
//     const search = productArr.filter(product => product[criteria] === value);
//     if(search.length <= 0){
//         return `Api Data Not find!`
//     }
//     return search;
// }
// const searchAPI = searchProduct(products, "category", "fruit")
// console.log(searchAPI);
// 4. Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.
// type productsType = [string, number, number];
// const calculateTotalProduct = (product: productsType[]): number => {
//     let calculateResult = 0;
//     for (const [name, price, quantity] of product) {
//         calculateResult += price * quantity;
//     }
//     return calculateResult;
// };
// const oneProducts = calculateTotalProduct([["dove", 530, 7], ["dove", 780, 2]]);
// console.log(oneProducts);
// another solve
// type ProductsType = [string, number,number];
// type productArray = ProductsType[];
// const calculateTotalCost = <T extends productArray>(products : T):number =>{
//     let totalResult = 0;
//     for(let i = 0; i < products.length; i++){
//         const [name, price, quantity] = products[i];
//             totalResult += price * quantity;
//     };
//     return totalResult;
// };
// const manyProducts:productArray = [
//     ["apple", 24, 4],
//     ["orange", 12, 3],
//     ["banana", 35, 4],
// ];
// const totalResult = calculateTotalCost(manyProducts);
// console.log(totalResult);
// 5. Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array.How would you approach this problem and write code to solve it ?
// const numbers:number[] = [1,2,3,4,5,6,7,8,9];
// const sumEvenNum = (numbers:number[]):number =>{
//     let sumVal = 0;
//     for(let i = 0; i < numbers.length;i++){
//         const num = numbers[i];
//         if((num % 2) === 0){
//             sumVal += num;
//         }
//     }
//     return sumVal;
// };
// console.log(sumEvenNum(numbers));
// 6. Create an interface called Person that includes properties for name(string), age(number), and email(string).Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.
// interface Person{
//     name:string;
//     age:number;
//     email:string;
// };
// const personApi:Person[] = [
//     {name:"morsalin", age:20, email:"morsalinkausar043@gmail.com"},
//     {name:"jakir", age:20, email:"jihadislam247@gmail.com"},
//     {name:"pranto", age:20, email:"pranto420@gmail.com"},
// ];
// const searchUserApi = <T extends Person>(personApi:T[], value:string) : T[] | string =>{
//     const search = personApi.filter(person => person.email === value);
//     if(search.length <= 0){
//         return "Person Not Found!"
//     }
//     return search;
// };
// const getPerson = searchUserApi(personApi, "morsalinkausar043@gmail.com");
// console.log(getPerson)
// 7. Create a TypeScript program that declares an array of numbers.Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array.Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.
// const array1:number[] = [2,4,8,20,16];
// const maxMin = (...numbers:number[]): [number, number] =>{
//     let maxNum = numbers[0];
//     let minNum = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         if(Math.max(numbers[i])){
//             maxNum = numbers[i]
//         }
//         else if(Math.min(numbers[i])){
//             minNum = numbers[i]
//         }
//     }
//     return [maxNum, minNum];
// };
// console.log(maxMin(...array1));
// 8. Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. If the boolean parameter is true, log the string parameter in uppercase. If the boolean parameter is false or not provided, log the string parameter in lowercase.
const color = (color, toUpperCase) => {
    if (toUpperCase) {
        return color.toLocaleUpperCase();
    }
    else {
        return color.toLocaleLowerCase();
    }
};
console.log(color("red")); // red
console.log(color("red", true)); // RED
console.log(color("blue", true)); // BLUE
