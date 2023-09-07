//Q1- Write a program to print the marks of the student in the object using for loop
/*
obj={
    harry:98,
    rohan:78,
    aakash:73
}
*/

let marks={
    harry:98,
    rohan:78,
    aakash:73
}

for(let i=0;i<Object.keys(marks).length;i++){
    //Object.keys(marks) return the array of the keys
    //Object.keys(marks).length return the number of elements in the array returned in the above case
    
    console.log("The marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]]);
}



//Q2- Write the program in Q1 using for in loop
console.log("Q2- using fo in loop")
for (item in marks){
    console.log("The marks of "+item+" are "+marks[item]);
}

//Q3- Write a program to print "Try Again!!" until the user enters the Correct numbers

let num=7;
let i;
while(i!=num){
    i=Number.parseInt(prompt("Enter the Number between 1- 10: "));
    if(i!=num){
        console.log("Try Again!!");
    }
}
console.log("You have entered the correct number");

//Q5- Write a function to find the mean of 5 numbers

const mean=(a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
}

console.log("Mean of given Numbers: ",mean(5,10,15,20,25));




