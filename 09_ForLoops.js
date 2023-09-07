//for loop

for(let i=1;i<=10;i++){
    console.log(i);
}


//suming first N natural numbers
let sum=0;

let num= prompt("Enter the value of num: ");
num=Number.parseInt(num);

for(let i=1;i<=num;i++){
    sum+=i;
}
console.log(sum);

//for in loop
let marks ={
    harry:90,
    shubh:72,
    shivani:96,
    rithika:68,
    shiv:36
}

for(let item in marks){
    console.log(item + " has scored "+marks[item])
}

for(let item of "Harry"){  //its applicable on iterable only
    console.log(item)
}