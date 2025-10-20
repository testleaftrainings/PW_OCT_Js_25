import test from '@playwright/test'

test("Login Page",async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("DemoSalesManager")
    //.first(),.nth(),.last()
    await page.locator(".inputLogin").last().fill("crmsfa")
    await page.locator(".decorativeSubmit").click()

    const title =await page.title()
    console.log(title)

 await page.locator("text='CRM/SFA'").click()
await page.waitForTimeout(5000)



})