import test from '@playwright/test'

test("Handle with Frame Locator",async({page})=>{

await page.goto("https://www.leafground.com/frame.xhtml")

await page.frameLocator("(//iframe)[1]").locator("#Click").click()
await page.waitForTimeout(3000)
})