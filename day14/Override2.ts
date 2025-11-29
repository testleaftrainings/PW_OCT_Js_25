import { parentClass } from "./Override1";

class child extends parentClass{

    phone(){
        console.log("Smart Phone")
        //get the parent class method -> reffer your parent class with super keyword
        super.phone()
    }
}
let c=new child()
c.phone()