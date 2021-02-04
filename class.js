class Phone{
    constructor(pName,pModel,pPrice){
        this.name= pName;
        this.model= pModel;
        this.price=pPrice;
        this.shop="Rana's World";
    }

}
const phone1=new Phone("Samsung","js6",15000);
const phone2=new Phone("Realme","5i",13000);

console.log(phone1,phone2);
