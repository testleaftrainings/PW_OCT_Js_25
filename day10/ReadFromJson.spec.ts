import test from '@playwright/test'
import fs from 'fs'
import path from 'path'
import value from  '../../utils/Login.json'

for(let data of value){
test(`Read Value from JSON file ${data.Tc_Id}`,async({page})=>{

await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill(data.Username)
    await page.locator("#password").fill(data.Password)
    await page.locator("#Login").click()
})

}

test.only("Use Specific Json value",async({page})=>{

 const val=JSON.parse(fs.readFileSync(path.join(__dirname,"../../utils/Login.json"),'utf-8'))
 console.log(val.Username)
})    