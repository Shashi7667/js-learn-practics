// WAP to swap a number
// using tempory variable
let a = 20;
let b = 30;

console.log("Before Swap : a =", "b =", b);

let temp = a;
a = b;
b = temp;
console.log("After Swap a = ", "b =", b);

// without temprory operater
let x=5, y= 10;
console.log("Before Swap x = ", "y = ",y);

x= x + y;
y= x - y;
x= x - y;

console.log("After Swap x = ", "y = ", y);