// console.log(arr);  // Cannot access 'arr' before initialization
// let arr = [1,3,5,6,8]

// {
//     let arr2 = [1,2,3,4,5,6]
//     console.log(arr2);
// }

// const arr3 = new Array(1,3,4,5,67,78,)
// const arr5 = Array(1, 2, 3, 4, 5)
// const arr4 = Array(1, 2, 3, 4, 5)

// Array ---> array constructor / class used to create array objects
// console.log(arr3.length);
// console.log(arr4);

// arr4.pop(3) // Delete 1 ele at the end of array.
// console.log(arr4);

// console.log(arr3);
// arr3.push(6,7)   // Add ele at the end of array.
// console.log(arr3);
// console.log(typeof(arr3)); 

// const hello = 
//             ["rishabh", 
//                 21, 
//                 2001, 
//                 {company1: "bng", tech:"reactJS"}, 
//                 {company2:"geekster", tech:"educator"},
//                 [3,4,5,6,7,8,89,9]
//             ]

//             console.log(hello[6]);  // Undefine because excide index.
//             console.log(hello[3]);
//             console.log(hello[5]);
            
// var hey = "rishabhSharma"
// var heyarr = hey.split('') // make array by splite single character 
// console.log(heyarr); 
// Output :
// // [
// //     'r', 'i', 's', 'h',
// //     'a', 'b', 'h', 'S',
// //     'h', 'a', 'r', 'm',
// //     'a'
// //   ]
  

// var commaseperatedValues = "facebook, amazon, google, apple, netflix"
// var commaseperatedValuesArr = commaseperatedValues.split(", ")
// console.log(commaseperatedValuesArr); // [ 'facebook', 'amazon', 'google', 'apple', 'netflix' ]

// var modify = [1,2,3,54,5,6,78,89,9,90, ,]
// modify[3] = 5000
// console.log(modify); // update the value at 3 index, errase first value and update new .


const fillEx = [1,2,34,5,5,6,7]
// fillEx.fill(8)
// console.log(fillEx); // [8,8,8,8,8,8,8,8]
// fillEx.fill("rishabh")
// console.log(fillEx); // ['rishabh','rishabh','rishabh','rishabh','rishabh','rishabh','rishabh','rishabh']

// fillEx.fill("rishabh", 3, 5)
// console.log(fillEx); // fill rishab index 3 to 5 - 1.

// fillEx.fill("ghgh", 2)
// console.log(fillEx); // fill the string from given index to last index.

// fillEx.fill("ghgh", -2)
// console.log(fillEx); // last 2 index is fill with given string.

// var arr1 = [1,2,3,45,56,6,7]
// var arr2 = [1,2,3,45,56,6,7]
// var finalarr = arr1.concat(arr2)  // Add 2 array.
// console.log(finalarr);
// var ojjj = {}
// console.log(finalarr.indexOf(3)); // find value at which index . 3 is at 2 index.
// console.log(finalarr.lastIndexOf(3)); // find value at last index. 3 is at 9 index.

// console.log(Array.isArray(ojjj)); // checking given is array  or note.



// const hello = 
//             ["rishabh", 
//                 21, 
//                 2001, 
//                 {company1: "bng", tech:"reactJS"}, 
//                 {company2:"geekster", tech:"educator"},
//                 [3,4,5,6,7,8,89,9]
//             ]

//             console.log(hello.toString()); // Print as a string.


// const arr = Array() // creates an an empty array
// console.log(arr)

// const eightEmptyValues = Array(8) // it creates eight empty values
// console.log(eightEmptyValues) // [empty x 8]

// const arr = Array() // creates an an empty array
// console.log(arr)

// const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
// console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

// const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
// console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

// const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
// console.log(four4values) // [4, 4, 4, 4]


// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.indexOf(5)) // -> 4
// console.log(numbers.indexOf(0)) // -> -1
// console.log(numbers.indexOf(1)) // -> 0
// console.log(numbers.indexOf(6)) // -> -1

// // let us check if a banana exist in the array

// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let index = fruits.indexOf('banana')  // 0

// if(index === -1){
//    console.log('This fruit does not exist in the array')  
// } else {
//     console.log('This fruit does exist in the array')
// }
// // This fruit does exist in the array

// Array.isArray:To check if the data type is an array

// const numbers = [1, 2, 3, 4, 5]
// console.log(Array.isArray(numbers)) // true

// const number = 100
// console.log(Array.isArray(number)) // false

// toString:Converts array to string

const numbers = [1, 2, 3, 4, 5]
console.log(numbers.toString()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook