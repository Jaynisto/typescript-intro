// Declaring a global number
var global_value = 85;

// Creating a class

class Numbers {

    // Class Variable
    my_Age = 12;

    // Static Field
    static stVal = 10;

    //Creating a constructor ((arrow function must be wethout a const because class memeber cannot have that keyword))
    storeNum = () : void => {

        //Declaring a local variable
        var local_num = 12;
    }

}

console.log(global_value, " Our global Variable!");
const numObject = new Numbers();
console.log(numObject.my_Age, " Class Variable")
console.log(Numbers.stVal , " Static Variable")
//We haven't accessed the local varible yet
