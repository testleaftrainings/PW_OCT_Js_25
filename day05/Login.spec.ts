import test from '@playwright/test'

test("Xpath",async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.locator("//input[@id='username']").fill("DemoSalesManager")
    await page.locator("(//input[@class='inputLogin'])[2]").fill("crmsfa")
    await page.locator("//input[contains(@class,'decorative')]").click()
    console.log(await page.title())


    await page.locator("//div[@class='nav-fill']//input").first().fill("phones")
    await page.locator("//div[@class='nav-fill']//input").nth(2).click()
    //nth- index will start from '0' -> go with 3rd match -> index value(2)
    await page.locator("//div[@class='nav-fill']//input").last().fill("")

    //xpath - index 
await page.locator("(//div[@class='nav-fill']//input)[3]").fill("")

})