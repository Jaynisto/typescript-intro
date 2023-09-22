// Declaring a string number
var stringNumber = '215';

// Type Assertion. String to Number.
var strin : number = <number><any>stringNumber

// Converting the string into a number,  You Can Use Number() or parseInt() 
var stringNum: number = Number(stringNumber);


// Consoling the type of value it is
console.log(typeof(strin)); // => string

//Console logging the stringNum and 5 sum.
console.log(stringNum+5) // => 220
