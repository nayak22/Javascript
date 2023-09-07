let name="Samrath";

//to get the length(Property) of the string
console.log(name.length); // 7 characters are present

//to convert string to uppercase(function)
console.log(name.toUpperCase());


//to convert string to lowerCase(function)
console.log(name.toLowerCase());

//To slice the strings
console.log(name.slice(0,3));//excluding 3rd position
console.log(name.slice(3)); //till last from 3rd position

//to replace the charcters/string in string
console.log(name.replace("rath","mmy"));

//string concat
let lastName="Nayak";
console.log(name.concat(" is his first name and ",lastName, " is his last name."));//can concat any number of the strings


//trimming extra spaces
let extra="   spaced    ";
console.log(extra.trim());

// all these operation happen and creates new tring - string is immutable

