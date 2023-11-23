//? cuando nosotros queremos definir una funion en JS la hacemos de la siguiente manera function addNumber(){}
//* si queremos definir una funcion en TS podemos hacerlo de la siguiente manera function sumar(a:number,b:number):number{ return a+b}

function addNumber(){};

function sumar(a:number,b:number):number{ return a+b}
const result=sumar(1,2);
console.log({result})
 //* lo mismo con una funcion arrow
 const addNumberArrorw=(a:number,b:number):number=>{return a+b}
 const result2=addNumberArrorw(3,4)
 console.log({result2})
 function multiply(firsrNumber:number,SecondNumber?:number,base:number=2){return firsrNumber*base;}
const multiplyResult=multiply(5,undefined,3);
console.log({multiplyResult})



interface Character{
    name:string;
    hp:number;
    showHp:()=>void;
}


const healCharacter=(character:Character,amount:number)=>{
    character.hp+=amount;
}
const strider:Character={
    name:"Strider",
    hp:50,
    showHp(){
        console.log(`Puntos de visa ${this.hp}`)
    }
}
healCharacter(strider,10)
healCharacter(strider,100)
strider.showHp();






export{}