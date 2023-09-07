//Q1- What will the  foling print in JS
//Console.log("har\".length")
console.log("har\"".length); //will output 4- har(3) and '"' 1 total 4

//Q2- Explore includes, startsWith, endsWith function of the string

//includes
let question="Do you need some water?";
console.log(question.includes("water"));// returns true
console.log(question.includes("eed"));// returns true

//startsWith
console.log(question.startsWith("Do")); //true
console.log(question.startsWith("D"));//true

//endwsWith
console.log(question.endsWith("water?"));//true
console.log(question.endsWith("?"));//true



//Q3 - write program to convert the gives string into lowercae
console.log(question.toLowerCase());

//Q4- Extract the amount from the given string - "Please give Rs 1000"
let request="Please give Rs 1000";
let amount=request.slice(-4);//will be string
console.log(amount);

//Q5- Try to change 4th character of the given string
let friend="Deepika"
friend[3]="r"
console.log(friend); //wont change because the string is immutable it will not trow any erro too