let arr=[45,23,21];

let newArray=arr.map((value,index,array)=>{//here index and array are optional paramters
    console.log(value,index,array); 
    return value +1;
})
console.log(newArray);


//array filder method - used to filter elements
let arr2=[45,23,24,21,0,3,5,7,9,6,35,42]
let newArray2=arr2.filter((element)=>{
    return element<10;
});

console.log(newArray2);

//reduce in array
let arr3=[45,23,24,21,0,3,5,7,9,6,35,42];
let reducedValue=arr3.reduce((h1,h2)=>{
    return h1+h2;
});
/* Takes ele1 and ele2 adds it takes ele3 and add to first result so on */
console.log(reducedValue);
