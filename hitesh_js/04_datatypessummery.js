// primitive data types 

// 7 types : String, boolean, number, bigint, symbol, null, undefine

// javascript is a dynamic type language

const score = 100
const scoreValue =20.3

const isLoggedIn = false

const outsideTemp = null
let userEmail;  // undefine 

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// Reference data types , non primitive data types

// Arrays, object, function, 

let movie = ["KGF", "Bahubali"];
// console.log(movie);



let bike = "MT-15"

let anotherBike ="ZX10R"
anotherBike ="Kawashaki"

console.log(bike);
console.log(anotherBike);


let user1 ={
    email :"infoshashi69@gmail.com",
    upi : "user@ybl"
}

let user2 = user1

user2.email = "opshashi420@gmail.com"

console.log(user1.email);
console.log(user2.email);

