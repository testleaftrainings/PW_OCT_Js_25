import test from '@playwright/test'

test("Handle Alert with page.no",async({page})=>{

    //page.no -> to handle mulitple alert 
page.on('dialog',Type=>{
const type =Type.type()
console.log(type)

if(type === 'alert'){
    Type.accept()
}else if(type==='confirm'){
    Type.accept()
}else{
    //Type.accept("Dilip")
    Type.dismiss()
}

})

 await page.goto("https://www.leafground.com/alert.xhtml")
    //nth()-> index will start from '0'
    await page.locator("//span[text()='Show']").first().click()
    await page.waitForTimeout(10000)
    await page.locator("//span[text()='Show']").nth(1).click()
    await page.waitForTimeout(10000)
    await page.locator("//span[text()='Show']").nth(4).click()




})