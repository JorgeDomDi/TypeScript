export interface Producto{
    description:string;
    price:number;

}
const phone:Producto={
    description:"Nokia A1",
    price:150.5
}
const tablet:Producto={
    description:"iPad Air",
    price:250.5
}
export interface TaxCalculationOptions{
    tax:number;
    products:Producto[];
}

export function taxCalculation({tax,products}:TaxCalculationOptions):number[]{
let total=0;
products.forEach(({price})=>{
 
    total+=price;
})

return[total,(total*tax)]
}

const shoppingCard=[phone,tablet];
const tax=0.15;

const [total,taxTotal]=taxCalculation({
    products:shoppingCard,
    tax:0.15


})

console.log("Total ",total);
console.log("Tax ",taxTotal);












