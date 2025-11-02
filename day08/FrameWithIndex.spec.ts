import test from '@playwright/test'
test("Handle frame with index",async({page})=>{

await page.goto("https://www.leafground.com/frame.xhtml")

//count of the frame
const totalFrame= page.frames()
console.log("Toatl Number of Frames :"+totalFrame.length)
//it will count main page as one frame
//index value start from '0'
//[0]->main page,[1]-f1,[2]-f2,[3]-f3,[4]-f4

const frame=totalFrame[1]
await frame.locator("#Click").click()
await page.waitForTimeout(3000)

const nested=totalFrame[4]
await nested.locator("#Click").click()
await page.waitForTimeout(5000)
})