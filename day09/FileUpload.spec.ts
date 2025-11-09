import test from '@playwright/test'

test("Upload the file with Input tag and Type is file",async({page})=>{

await page.goto("https://www.leafground.com/file.xhtml")
await page.locator("//span[text()='Choose']/following-sibling::input").first()
.setInputFiles("utils/Playwright_Locators.pdf")
await page.waitForTimeout(3000)
})

test.only("Handle with Event Listener",async({page})=>{
    
await page.goto("https://www.leafground.com/file.xhtml")
//create Promise
const fileup= page.waitForEvent('filechooser')
//do action
await page.locator("//span[text()='Choose']/following-sibling::input").first().click()
//resolve it 
const Upload=await fileup

await Upload.setFiles("utils/Playwright_Locators.pdf")
})