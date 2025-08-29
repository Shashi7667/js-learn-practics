function number( a, b){
    return a * b;
}

let result = number(10, 30);
console.log(result);


function car(...namee){
    return namee
}

let carName = car("Ford", "tata", "alto");
console.log(carName);

// function car(...names) {
//     return names;
// }

// let carName = car("Ford", "tata", "alto");
// console.log(carName); 

function toCelcius(f){
    return (5/9) * (f - 32);
}

let value = toCelcius(32);
console.log(value);

// arrow function
// before arrow

let numberss = function(b , c) {return b + c}

let results = numberss(23 , 23);
console.log(results);

// after arrow

add = (x , y) => x + y;

let addTwoNumber = add(20 , 21);
console.log(addTwoNumber);



const my_obj = {key: "value"};
my_obj.key = "otherValue";
console.log(my_obj);


const mySkils = ["Html", "css", "js", "bootstrap"];
mySkils.push("Tailwind");
console.log(mySkils);
