console.log("Operators in JS");

let a=45;
let b=4;

console.log("a+b= ",a+b);//addition
console.log("a-b= ",a-b);//subraction
console.log("a*b= ",a*b);//multiplication
console.log("a/b= ",a/b);//Division //return accurate value when devided
console.log("a**b= ",a**b);//Exponent
console.log("a%b= ",a%b);//modulo - gives remainder

console.log("a value intially: ",a);
console.log("a value pre incremented before logged: ",++a);
console.log("a value post incremented first logged: ",a++);
console.log("a value post incremented value: ",a);

//similarly decrement works


//Assignment operator
let num=8;
num+=10; //shorthand of num=num+10;
console.log("Value of num is: ",num);
num-=10; //shorthand of num=num-10;
console.log("Value of num is: ",num);
num*=10; //shorthand of num=num*10;
console.log("Value of num is: ",num);
num/=10; //shorthand of num=num/10;
console.log("Value of num is: ",num);

//Comparison Operator
let comp1=6;
let comp2="6";

console.log("Comp1==Comp2 : ",comp1==comp2);
console.log("Comp1!=Comp2 : ",comp1!=comp2);
console.log("Comp1===Comp2 : ",comp1===comp2);
console.log("Comp1!==Comp2 : ",comp1!==comp2);

//similarly <,>,<=,>= etc are some more comaprision opertor


//logical operator

let x=5;
let y=6;
console.log(x<y && x==5)//&& And operator result is true when both the conconditiondion is true
console.log(x>y || x==5)//&& And operator result is true when one of the  condition is true
console.log(!true)

//single line Comment
/*
MultiLine 
Comment
*/