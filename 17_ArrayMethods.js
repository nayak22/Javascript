//Array methods

let num=[1,2,3,34,4];

console.log(num,typeof num);

//to convert array into a string
let stringArray=num.toString();
console.log(stringArray,typeof stringArray);

//to convert array into a string with some seperator
let joinedArray=num.join("_");
console.log(joinedArray,typeof joinedArray);

//to remove the element at the end of the array- modifiess the existing element
let popedElement=num.pop();
console.log(popedElement); //4
console.log(num); //[1,2,3,34]


//to add the element at the end of the array- modifiess the existing element
let arraySizeAfterPushed =num.push(32);
console.log(arraySizeAfterPushed); //5 lenght after pushed
console.log(num); //[1,2,3,34,32]

//to removed the element at the begining of the array- modifiess the existing element
let shiftedElement =num.shift();
console.log(arraySizeAfterPushed); //1 which is removed
console.log(num); //[2,3,34,32]


//to add the element at the begining of the array- modifiess the existing element
let arraySizeAfterUnshifted =num.unshift(24);
console.log(arraySizeAfterPushed); //5 lenght after unshifted - element added
console.log(num); //[24,2,3,34,32]