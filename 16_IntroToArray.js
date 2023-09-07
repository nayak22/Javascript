let marksClass12=[91,82,63,84,false,"Not Present"];

//Accessing the array element
console.log(marksClass12[0]); //0th indexing
console.log(marksClass12[1]);
console.log(marksClass12[2]);
console.log(marksClass12[3]);
console.log(marksClass12[4]);
console.log(marksClass12[5]);
console.log(marksClass12[6]); //if index is not present then it will print undefined

//to find the length of an array
console.log("The length of the marksClass12 array is: ", marksClass12.length);

//Adding the new element
marksClass12[6]=89;
console.log(marksClass12[6]);  // now it will be 89 instead of undefined 

//modifying the element
marksClass12[0]=96; //first element will change to 96 from 91
console.log(marksClass12); 

console.log("The length of the marksClass12 array is: ", marksClass12.length); //new length will be 7

console.log(typeof(marksClass12)); //type of the array is Object