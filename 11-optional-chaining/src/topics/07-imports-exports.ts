import { Producto, taxCalculation } from './06-functions-destructuring';

const shoppingCart:Producto[]=[
{
    description:"Nokia",
    price:100
},
{description:"iPad",
price:250}
];
const [total,tax]=taxCalculation({
    products:shoppingCart,
    tax:0.15
});
console.log(total);
console.log(tax);
