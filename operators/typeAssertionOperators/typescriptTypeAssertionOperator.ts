let someValue: any = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;
// Alternatively: let strLength: number = (<string>someValue).length;
console.log(strLength)