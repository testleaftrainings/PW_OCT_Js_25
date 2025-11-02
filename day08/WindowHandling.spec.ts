import test, { chromium } from '@playwright/test'

test("Multiple context in single Browser",async()=>{

const browser =await chromium.launch({channel:'chrome'})
const context= await browser.newContext()

const page=await context.newPage()
const page2=await context.newPage()

await page.goto("https://www.google.com")
console.log(await page.title())
await page.waitForTimeout(2000)

await page2.goto("https://www.facebook.com")
console.log(await page2.title())

})

//context fixture
test.only("Handle Single window",async({page,context})=>{

    await page.goto("https://www.amazon.in/")
    const data= page.locator("#twotabsearchtextbox")
    await data.fill("phones")
    await data.press("Enter")

    //create promise
    //perform action
    //resolve promise
//step 1
    const promise=context.waitForEvent('page')

    //step 2 
        await page.locator("//span[contains(text(),'iPhone 17 Pro 256 GB')]").first().click()

        //step 3
         const childPage= await promise

         await childPage.waitForTimeout(2000)
         console.log(await childPage.title())
await page.waitForTimeout(5000)
         await childPage.close()
         //automatic control will move parent
         
      await page.locator("//a[text()='Sell']").click()
    
})