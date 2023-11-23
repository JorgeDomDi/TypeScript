

// ! si una variable sabemos que nunca va a cambiar la definimos como una constante ej: const name="jorge"
//** para definir el tipo de dato a una variable utilizamos esta forma const name:string="jorge"
// ? para definir varios tipo de dato o contenido a una variable la podemos defirnir de esta forma let hpPoints:number | string=95; ó  let hpPoints:number | "FUll"=95;
const name:string="Strider";
let hpPoints:number | "FULL"=95;
const isAlive:boolean=true;

hpPoints="FULL";
console.log({
    name,hpPoints,isAlive
})

export{}