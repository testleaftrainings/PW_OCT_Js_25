import test from '@playwright/test'

test("Handle with Frame Object",async({page})=>{

    await page.goto("https://www.leafground.com/frame.xhtml")

    await page.frame({url:"https://www.leafground.com/default.xhtml"})?.locator("#Click").click()

    console.log(await page.frame({url:"https://www.leafground.com/default.xhtml"})?.locator("#Click").innerText())
    await page.waitForTimeout(3000)
})

//