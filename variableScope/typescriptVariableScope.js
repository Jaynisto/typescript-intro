// Declaring a global number
var global_value = 85;
// Creating a class
var Numbers = /** @class */ (function () {
    function Numbers() {
        // Class Variable
        this.my_Age = 12;
        //Creating a constructor ((arrow function must be wethout a const because class memeber cannot have that keyword))
        this.storeNum = function () {
            //Declaring a local variable
            var local_num = 12;
        };
    }
    // Static Field
    Numbers.stVal = 10;
    return Numbers;
}());
console.log(global_value, " Our global Variable!");
var numObject = new Numbers();
console.log(numObject.my_Age, " Class Variable");
console.log(Numbers.stVal, " Static Variable");
//We haven't accessed the local varible yet
