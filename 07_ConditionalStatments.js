let a=prompt("Enter your age: ");//input away is taken as string
console.log(typeof a); //string

a= Number.parseInt(a);//converts string to int type
console.log(typeof a); //number

if (a>0){
console.log("A is the valid age");//if condition in if it runs
}
//optional else can be added
else{
    console.log("A is the not valid age");// if the "if" condition is false
}

if(a<0){
    console.log("A is the not valid age");
}
else if(a>0 && a<=9){
    console.log("A is  a kid and can't even imagine of driving");
}
else if(a>9 && a<18){
    console.log("A can drive after 18 when he/she is eligible to get license");
}
else{
    console.log("A can drive if he/she has valid driving license");
}

//switch statement in js
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

//Ternary operator
let age=19;
console.log(age>=18?"You can vote":"You are not eligible to vote")