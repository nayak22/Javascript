let num=[3,5,1,2,4,9];

//to loop through array using for loop
for(let i=0;i<num.length;i++){
    console.log(num[i]);
}

//using for each loop
num.forEach((element)=>{
    console.log(`Square of ${element} is ${element**2}`);
})

//Array.from
let firstName="Harry";
let arr= Array.from(firstName);
console.log(arr);

//for ...of loop
for(let item of num){
    console.log(item);
}


//for ...in loop
for(let item in num){
    console.log(item, num[item]);
}