import test from '@playwright/test'

test("Playwright Locators",async({page})=>{

await page.goto("https://parabank.parasoft.com/parabank/index.htm")

//getByText
await page.getByText("Admin Page").click()
await page.waitForTimeout(3000)

//getByRole
await page.getByRole('link',{name:'Forgot login info?'}).click()
await page.waitForTimeout(3000)

//getByAltText -> img tag
await page.getByAltText("ParaBank").click()
await page.waitForTimeout(3000)

//getByPlaceholder
await page.getByPlaceholder("Search").click()
//getByLable
await page.getByLabel("username").fill("demosalesmanager")
//getByTitle
await page.getByTitle("ParaBank").click()

//getByTestId
await page.getByTestId("BaseBadge").click()



})