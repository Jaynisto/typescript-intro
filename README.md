# Typescript

TypeScript is a **superset** of JavaScript, this means that it is able to do everything that JavaScript is capable of, but with extra features.

To install the TypeScript compiler globally on your machine by running the following command:

`npm i -g typescript`

It is very important to check if the installation was successful or not, there for to check type the command bellow (it will return the version number if successful):

`tsc -v`



## How to Compile TypeScript?

Open up your text editor and create a TypeScript file (for example, fisrtTypescript.ts).

Write some JavaScript or TypeScript( we will write Typescript):


```json let fruit : string = 'mango';  
   let id : number = 5;```


We can now compile this down into JavaScript with the following command:

`tsc fisrtTypescript`

TSC will compile the code into JavaScript and output it in a file called fisrtTypescript.js:

```var fruit = 'mango';  
   var id = 5;```


Then you can run you Javascript file using node

`node firstTypescript.js`


