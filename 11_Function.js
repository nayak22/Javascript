//function with out any parameter

const message=()=>{
    console.log("Hello, How is JS tutorial going on?");
}

//invoking this function
message(); //Hello, How is JS tutorial going on?

//function returning something

const hello=()=>{
    return "Hi"
}

//invoking this- should receive the returned value in some variable
let greeting=hello();
console.log(greeting);//Hi

//Other way of declaring or defining the function
function onePlusAvg(x,y){
    return 1+(x+y)/2
}

const sum=function(p,q){
    return p+q
}

//invoking the abouve 2 functions
console.log("One plus avrage of the 2 numbers",onePlusAvg(5,25)); //15
console.log("sum of the 2 numbers",sum(5,25)); //30
