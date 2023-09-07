//Q1-Cusing logical operator find if the age lies between 10 and 20
let age= prompt("What is your age? ");
age=Number.parseInt(age)
if(age>10&& age<20){
   console.log("Your age lies between 10 and 20");
}
else{
    console.log("Your age doesn't lies between 10 and 20");
}
//Q2- Demonstarte the use of switch statement
let day="Saturday";
switch(day){
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    default :
        console.log("Today is Weekend");
        
            
}
    


//Q3- Write a js program to check if the number is divisible by 2 and 3
let num=prompt("Enter the number ")
num=Number.parseInt(num)
if(num%2==0 && num%3==0){
   console.log("Your number is divisible by both 2 and 3");
}
else{
    console.log("Your number is divisible by both 2 and 3");
}


//Q4- Write a js program to check if the number is divisible either 2 or 3
let numNew=prompt("Enter the number ")
numNew=Number.parseInt(numNew)
if(numNew%2==0||numNew%3==0){
    if (numNew%2==0){
        console.log("Your number is divisible by 2");
    }
    else{
        console.log("Your number is divisible by 3");
    }
   
}
else{
    console.log("Your number is divisible by both 2 and 3");
}

//Q5- USing ternary operator check whether if the person can drive or not if the age>=18

console.log(age>=18?"You are eligible to drive if you have license to drive": "You are not eligible to drive")