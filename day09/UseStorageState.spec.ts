import test from '@playwright/test'

test.use({storageState:"utils/Salesforce_login.json"})
test("Skip the login",async({page})=>{
await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
await page .locator("//div[@class='slds-icon-waffle']").click()

})


test("click on Leads",async({page})=>{
await page.waitForTimeout(10000)
await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
await page.locator("//span[text()='Leads']").first().click()
})