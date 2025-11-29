import axios from "axios"

let endpoint="https://dilipkumaar2005.atlassian.net/rest/api/2/issue"
let emailId="dilipkumaar2005@gmail.com"
let api_Token="ATATT3xFfGF0L5S_uZLIOr9m8ZU-BdX6oRBBZz8Ggou4VpODPBY1v7Uhsl3SEtNhgZ4Ar8RgG3fwiiPMlwYz6PYsgRsRwaHghbmDPRw36prZWeFNYSjW8sAlk_GaPL2TxSIirrGuLoU2UwErne-pP9BSgFthQDzCZpH4Csm9GsTtDPm7Pvs11Ns=26651140"
let key="OCT"


async function createIssue(summary:string,description:string){

const dataBody={

"fields":{
"project":{
    "key":key
},

"summary":summary,
"description":description,

"issuetype":{
    "name":"Bug"
},
}
}
//api -> post()
const response= await axios.post(endpoint,dataBody,{
headers:{
    "Content-Type":"application/json",
},
auth:{
    username:emailId,
    password:api_Token
}

})

}

createIssue("Assign bug for Data mismatch","fields is not updated correcr ")