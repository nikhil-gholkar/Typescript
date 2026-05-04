let employee:object

employee={
    name:"nik",
    age:25
}
console.log(employee)

interface tasks{
    today:string,
    tomorrow:string,
    yesterday:string,
    now:number
}

let task:tasks={
    today:"eat",
    tomorrow:"code",
    yesterday:"repeat",
    now:2026
}


// The TypeScript object type represents any value that is not a primitive value.
// The Object type, however, describes functionality that is available on all objects.
// The empty type {} refers to an object that has no property on its own.