interface productTypes{
    id:number,
    name:string,
    price:number
}

const product=(id:number):productTypes=>{

    return {
        id:id,
        name:`motorola ${id}`,
        price:200
    }
}

const p=product(225)
console.log(`the new product is ${p.name} with price ${p.price}`)