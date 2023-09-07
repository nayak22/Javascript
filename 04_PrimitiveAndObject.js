console.log("Primitive and Object data types");

let a=null;
let b=345;
let c=true;//can also be false
let d=BigInt("567");
let e='Harry';
let f= Symbol("I'm a symbol");
let g=undefined;//you need not explicitly say it as undefined

console.log(a,b,c,d,e,f,g);
console.log(typeof(f));


//Objects
const item={
    "Harry":true,
    "Shubh":false,
    "Lovish":67,
    "Rohan":undefined
}

console.log(item["Harry"]);
console.log(item["Rohan"]);//undefined as its not present
