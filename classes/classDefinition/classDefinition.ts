// Defining a class
 class Person {
    firstName : string;
    lastName : string;
    age: number;

 // Constructor
    constructor(firstName : string,lastName : string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
 //Method
    getFullNameAndAge(): string{
        return `${this.firstName} ${this.lastName}, age: ${this.age}`
    }
}

//Inheritance

class Student extends Person {
    studentId: number;

    constructor(firstName: string, lastName: string, age: number, studentId: number){
        // Call the parent class constructor
        super(firstName, lastName, age);
        this.studentId = studentId;
    }

    study(): void {
        console.log(`${this.getFullName()} is studying.`)
    }

}

const person1 = new Person("John", "Doe", 30);
const person2 = new Person("Jane", "Smith", 25);

console.log(person1.firstName)
console.log(person2.firstName)
