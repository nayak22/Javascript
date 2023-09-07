//create string add a number to it

let firstName="Samrath";
let firstNameAge=firstName+25
console.log(firstNameAge); //number will be concatenated to string 

//find the type of string created in last question
console.log(typeof(firstNameAge));

//create the object of string as constand and try to modify it by assigning it to other number
const a={
    name:"Samrath",
    section: 1,
    isPrincipal: false
}

//a=5;//Assignment to constant variable-Error- a is refernce to object which cant be modified but value within the object can be modifies
//but below is possible

//Try adding new key to the constant object
a["friend"]="Shubham";//this is possible
console.log(a);


//create the word dictionary of 5 word
const dict={
    "abstemious": "sparing or moderate in eating and drinking; temperate in diet",
    "benevolent": "characterized by or expressing goodwill or kindly feelings",
    "cogent": "convincing or believable by virtue of forcible, clear, or incisive presentation",
    "diligent": "constant in effort to accomplish something; attentive and persistent in doing anything",
    "ebullient": "overflowing with fervor, enthusiasm, or excitement; high-spirited"
};
console.log(dict);