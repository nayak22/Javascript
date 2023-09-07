let firstName="Harry";
console.log(firstName);

//to get the length of the string - number of character
console.log(firstName.length);

//to get the characters
//0 indexing
console.log(firstName[0]);
console.log(firstName[1]);

//Can use the single quoes to wrap too
let lastName='Nayak';
console.log(lastName);

//if its starts with single quotes it should end in same, and same is the case with double quotes

//Template literal
firstName="Samrath";
lastName="Nayak";

console.log("My name is firstName lastName")//will print as it is
console.log(`My name is ${firstName} ${lastName}`)//will print by replacing the variable in place

//Escape sequence
let fruit='Banana\'s';
console.log(fruit);

let comment="This is string introduction \nWe will learn more on operations strings" ; //"We will learn more on operations strings" - will come in new line
console.log(comment);




