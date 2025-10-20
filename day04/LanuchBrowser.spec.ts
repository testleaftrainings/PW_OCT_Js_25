import test, { chromium, webkit } from 'playwright/test'

test("Launch Browser",async()=>{

const browser= await webkit.launch()
const context=await browser.newContext()
const page=await context.newPage()

await page.goto("https//:www.google.com")

await page.waitForTimeout(3000)

})


test.only("Launch with Page Fixture",async({page})=>{

await page.goto("http://leaftaps.com/opentaps/control/main")
await page.waitForTimeout(3000)
})