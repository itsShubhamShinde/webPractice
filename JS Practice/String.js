// var name = "Shubham " // double cote.
// let name1 = 'Shubham ' // single cote.
// let name2 = `Shubham ` // backtics.
// console.log(name);

// var a=10;
// let b = 30;
// const c = 40;
// {
//     var a = 45; // Globle scope.
//     let b = 50; // Bracket scope.
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// var name1 = "hello"
// let hello = 'name'


// let concatinate1 = (name1, hello)
// let concatinate2 = name1 + hello
// let concatinate3 = name1 + " " + hello
// let concatinate4 = `${name1}` + " " + `${hello}`
// let concatinate5 = `${name1} ${hello}`

// console.log(concatinate1);
// console.log(concatinate2);
// console.log(concatinate3);
// console.log(concatinate4);
// console.log(concatinate5);
// console.log("the value of concatinate5 is : ", concatinate5)
// console.log("the value of concatinate5 is : "+ concatinate5)
// console.log("hi there !!! "+ concatinate5 + " is the value of soncatinate5")
// console.log(`hi there !!! ${concatinate5} is the value of concatinate5`)
// console.log("hi there !!! ${concatinate5} is the value of concatinate5")

// var day = 9

// const para = `hey this is a long sentence and i hope you are liking my sessions and gioving good reviews in the feedback form..... i wish ki sabki achi achi placemnmet ho jaye aaj humari ${day}th class hai`
// const para2 = `hey this is a long sentence and i hope you are liking my sessions.\n and giving good reviews in the feedback form..... i wish ki sabki achi achi placemnmet ho jaye aaj humari ${day}th class hai`
// const para4 = `hey this is a long sentence and i hope you are liking my sessions.\n \t \\ ' and giving good reviews in the feedback form..... i wish ki sabki achi achi placemnmet ho jaye aaj humari ${day}th class hai`

// para = `day ${day} \t5\t3 class`

// x+y = 90
// xy = 0
// xy
// console.log(para);
// console.log(para2);
// console.log(para4);

// console.log("\n");
// console.log(para);

// var str =  "HelloRishabh"
// var str2 =  "Herlo world"
// // toUppercase
// to Lowercase
// length
// substr 
// slice 
// split 
// tri/m 

// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.length)

// 012345678910
// HelloRishabh

// 012345678910
// Herlo world
// console.log(str2.substring(7, -2)) // stating index, ending index(ending indx is not included)
// console.log(str2.substr(0,3)) // starting index, length (is included, and it means ths count of char, from starting index)
// console.log(str2.slice(7, -2)) // stating index, ending index(ending indx is not included)

// // the diff between substring and slice is tha substring takes the higer or larger number as the ending index and lower or smaller number as the starting index no matter in whhat order our numbers are written
//  in case of slice if we write higher number or larger number before the smaller or lower number then it will not work 



// console.log(str2.slice(2,-3));
// console.log();

// (function(a){

//     return (function(){
   
//       console.log(a);
   
//       a = 6;
   
//     })()
   
//    })(21);

//    function solve(arr, rotations){

//     if(rotations == 0) return arr;
   
//     for(let i = 0; i < rotations; i++){
   
//       let element = arr.pop();
   
//       arr.unshift(element);
   
//     }
   
//     return arr;
   
//    }

//    let ans = solve([44, 1, 22, 111], 5);
//    console.log(ans);

//    var a = 1;  

// var b = 0;  

// while (a <= 3)  

// {  

//    a++;  

//    b += a * 2;  

//    console.log(b);

// }

// var a = Math.max();

// var b = Math.min();

// print(a);

// print(b);

// var a = true + true + true * 3;
// console.log(a);

// console.log(typeof(NaN));

// console.log(parseInt("123Hello"));

// console.log(parseInt("Hello123"));


// const obj1 = {Name: "Hello", Age: 16};
// const obj2 = {Name: "Hello", Age: 16};
// console.log(obj1 === obj2); // because of address is not same

const obj1 = {first: 20, second: 30, first: 50};

console.log(obj1);