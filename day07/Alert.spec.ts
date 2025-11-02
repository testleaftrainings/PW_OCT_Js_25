//playwright  to handle the alert -> Auto dismiss
//cancle your alert

import test from '@playwright/test'

test("Auto Dismiss alert",async({page})=>{

    await page.goto("https://www.leafground.com/alert.xhtml")
    //nth()-> index will start from '0'
    await page.locator("//span[text()='Show']").first().click()
    await page.waitForTimeout(10000)
})

//Event listener
//page.once -> handle first alert alone
test.only("Handle Alert with Page.Once",async({page})=>{

    page.once('dialog',alertType=>{
        //what type of alert
        const type= alertType.type()
        console.log(type)
        //print message from dialog box
        console.log(alertType.message())
        //handle alert
        alertType.accept()
    })

    await page.goto("https://www.leafground.com/alert.xhtml")
    //nth()-> index will start from '0'
    await page.locator("//span[text()='Show']").first().click()
    await page.waitForTimeout(10000)
    await page.locator("//span[text()='Show']").nth(1).click()
    await page.waitForTimeout(10000)
})