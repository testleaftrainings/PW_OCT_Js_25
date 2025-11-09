import test from '@playwright/test'

test("Storage State",async({page})=>{

    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    //storageState -> .json
    await page.context().storageState({path:"utils/Salesforce_login.json"})
})


//https://testleaf.lightning.force.com/lightning/page/home