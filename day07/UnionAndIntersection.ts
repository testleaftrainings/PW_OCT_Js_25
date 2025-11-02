import { log } from "console"

//union
let details:string|number
details=37
details="Dilip"


//intersection
//let data:boolean&string

//type alias -> create custom type of data
type admin={
    adminId:string
    adminPassword:string
}

type customer={
    cusId:string
    cusStatus?:boolean
    cusPassword:string
}

type db= admin&customer
let login:db={
adminId:"demo",
adminPassword:"crm",
cusId:"sales",
cusPassword:"sfa",
//cusStatus:true    
}

console.log(login)


//optional value : ? -> cusStatus? 