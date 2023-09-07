console.log("var,let const difference");


var a=45;
var b='harry'
var c= null
var d= undefined
let bChanged="bouter"

//earlier everything was declared using var
console.log(b)
console.log(bChanged)

{
    var b="this";
    console.log(b);
    let bChanged="binner"
    console.log(bChanged);
}
console.log(b);
console.log(bChanged);

var newWord="hello"
var newWord="redeclared"

let newWord2="Welcome";
//let newWord2="WelcomeAgain"; //can be redeclared

const firstName="Samrath";//should be initilized during the declaration itself like below
//const lastName;
//firstName="Rajesh" //can't be done as it constant