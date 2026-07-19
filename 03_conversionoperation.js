let score = 33  //int , number 

let score1 = "33"  //string

//console.log(typeof score1)  // 3333  // here the number is converted into string and then concatenated with the string.
//console.log(typeof(score1))

//console.log(typeof score)  // 3333  // here the number is converted into string and then concatenated with the string.
//console.log(typeof(score))


let number = Number (score)  // here the string is converted into number and then concatenated with the number
//console.log(typeof number)  // 3333  // here the number is converted into string and then concatenated with the string.


let a = "33abc"
const number1 = Number (a)
//console.log(typeof number1)
//console.log(number1)  // THE VALUEE IN THIS IS NAN . 

let b = null


// null --> typeof --> object  --> NaN 
// unsefined --> typeof --> undefined
// NaN --> typeof --> number
// boolean --> typeof --> boolean  --> true --> 1 , false --> 0

// "" --> empty string --> false 
// "aayushh" --> string --> true



let someNumber = 33
let stringNumber = String(someNumber)  
console.log(typeof stringNumber)  // here the number is converted into string and then concatenated with the string.