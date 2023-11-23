
//? para crear un arreglo ej: let skills:string[]=["Bash","Counter","Healing"]
const skills:string[]=["Bash","Counter","Healing"]
//!las interfaces nos sirven para declarar los objetos literales
interface Character{
    name:string;
    hp:number;
    skills:string[];
    homeTown?:string; //?cuando la declaro si le pongo un ? quiere decir que es opcional
}
const strider:Character={
    name:"Strinder",
    hp:100,
    skills:["Bash","Counter"]

}
strider.homeTown="Rivendell"
console.table(strider)















export{}