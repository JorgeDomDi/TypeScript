

export class Person {
   
    
    constructor(private firstName:string,private lastName:string,address:string="No Address") {
        
    }
    
}
// export class Hero extends Person{
// constructor(private alterEgo:string,private age:number,public realname:string){
//    super(realname,"New York");
// }
// }
export class Hero {
   
constructor(private alterEgo:string,private age:number,public realname:string, private person:Person){
   
}
}
const tony=new Person("Tony","Stark")
const iroman = new Hero("Ironman",49,"Tony Stark",tony)
console.log(iroman)