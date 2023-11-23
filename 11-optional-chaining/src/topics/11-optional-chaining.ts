
export interface Passenger{
    name:string;
    children?:string[];
}
const passenger1:Passenger={
    name:"Fernando"
}
const passenger2:Passenger={
    name:"Melisa",
    children:["Natalia","Elizabeth"]
}
const printChildren=({name,children}:Passenger)=>{
const elena=children?.forEach(hijo=>{
    console.log(`Madre ${name} Hijo ${hijo}`);
    
})

}
printChildren(passenger2)