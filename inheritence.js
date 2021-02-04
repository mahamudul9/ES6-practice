class Parent{
    constructor(){
        this.pName="sakib";
    }
}

class Child extends Parent{
    constructor(cName){
        super();
        this.name= cName;
    }
    getFullName(){
        return this.name+" "+this.pName;
    }
}
 

const baby1=new Child("musfiq");
const baby2= new Child("masrafi");
console.log(baby1.getFullName());