// Defining a class
var Person = /** @class */ (function () {
    // Constructor
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    //Method
    Person.prototype.getFullNameAndAge = function () {
        return "".concat(this.firstName, " ").concat(this.lastName, ", age: ").concat(this.age);
    };
    return Person;
}());
var person1 = new Person("John", "Doe", 30);
var person2 = new Person("Jane", "Smith", 25);
console.log(person1.firstName);
console.log(person2.firstName);
