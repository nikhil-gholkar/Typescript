
let a:number;
a=20


// In this example, the userName variable gets the string type, 
// the age variable gets the number type, 
// and the active variable gets the boolean type.
let useName:string="nikhil"
let age:number=25
let active:boolean=true


// array

let arr:string[]=["nik","vis","sam"]
let arr2:number[]=[1,2,3,4,5]


// object


// In this example, the person object only accepts 
// an object that has two properties: 
// name with the string type and age with the number type.
let person:{
    name: string,
    age:number
}

person={
    name:"nikhil",
    age:25
}


// Function arguments & return types

let greeting:(name:string)=>string;

greeting=(name)=>{

    return `hello ${name}`
}

console.log(greeting("nik"));


// Use type annotations with the syntax : [type] to explicitly specify a 
// type for a variable, function, function return value, etc.