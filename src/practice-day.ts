
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




// // define productType 
// interface productType {
//     id: number,
//     name: string,
//     price: number,
//     category: string
// };

// // Define the Products array
// const products: productType[] = [
//     { id: 1, name: 'Product A', price: 10, category: 'Category A' },
//     { id: 2, name: 'Product B', price: 20, category: 'Category B' },
//     { id: 3, name: 'Product C', price: 30, category: 'Category A' },
//     { id: 4, name: 'Product D', price: 40, category: 'Category B' },
//     { id: 5, name: 'Product E', price: 50, category: 'Category A' }
// ];

// // Define the criterion and value to filter by
// const criterion = 'category';
// const value = 'Category B';

// // Use Array.filter() to filter the Products array
// const filteredProducts = products.filter(product => product[criterion] === value);
// // const filteredProducts = products.filter(product => product.category === value);

// // console.log(filteredProducts);




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

const numbers:number[] = [1,2,3,4,5,6,7,8,9];

const sumEvenNum = (numbers:number[]):number =>{
    let sumVal = 0;
    for(let i = 0; i < numbers.length;i++){
        const num = numbers[i];

        if((num % 2) === 0){
            sumVal += num;
        }
    }

    return sumVal;
};

console.log(sumEvenNum(numbers));


// 6. Create an interface called Person that includes properties for name(string), age(number), and email(string).Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.

// 7. Create a TypeScript program that declares an array of numbers.Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array.Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.

// 8. Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. If the boolean parameter is true, log the string parameter in uppercase. If the boolean parameter is false or not provided, log the string parameter in lowercase.