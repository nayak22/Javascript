//Additional Array methods

let num=[1,2,3,4,5,6,7,8,9];

console.log(num,typeof num);
console.log(num.length);//9

//delete element at particular index
delete num[0]

console.log(num);
console.log(num.length);//element legth is not changed

//concat multiple array
let num2=[10,11,12,13,14,15];
let num3=[16,17,18]
let newArray=num.concat(num2,num3);

console.log(newArray);
console.log(num, num2,num3); //none of num, num2, num3 is impacted with concat new array is created with concat

//sort method in arrays
let numberList=[246,325,32,172,126,432,275,167,86];
console.log(numberList);
// numberList.sort(); //modifies the original array- sorts alphabatically
// console.log(numberList);

//can sort in decending by taking function arguments
let compare=(a,b)=>{
    return b-a; //if b- a then decending order if you need in accending order then a-b
}
numberList.sort(compare); //modifies the original array- sorts alphabatically
console.log(numberList);

//reverse tyhe array
numberList.reverse();
console.log(numberList);

//splicing
let deletedValues=numberList.splice(2,4,1021,1023,1024,1025);
/*splice(start index,how many elements to be removed, elements to be added
    --Note: the number of element removed need not be equal to number of elemnt to be added*/

console.log(numberList);
console.log(deletedValues);

//slicing
let newNum=numberList.slice(3); //3rd element to last 
console.log(newNum);

