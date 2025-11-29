import { cfixture } from "./Customdfixture.spec";

cfixture("CLick on App launcher",async({login})=>{
    await login.click("//div[@class='slds-icon-waffle']")

})