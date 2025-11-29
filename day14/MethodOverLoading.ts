class ReusableMethods {


ElementClick(locator:string):void
ElementClick(locator:string,timeout:number):void


ElementClick(locator:string,timeout?:number):void{
if(timeout){
    console.log(`Add time `)
}else{
    console.log(`enter the username ${locator}`)
}
}
}

let rm=new ReusableMethods()
rm.ElementClick("#username")
rm.ElementClick("#username",5000)