import test from '@playwright/test'

test("Handle DropDown with select tag",async({page})=>{

await page.goto("https://www.leafground.com/select.xhtml")

//selectoption()
await page.selectOption(".ui-selectonemenu",{label:"Playwright"})

await page.waitForTimeout(5000)


await page.selectOption(".ui-selectonemenu",{index:3})
//await page.selectOption("",{value:""})

})

test.only("Handle DropDown with Non Select tag",async({page})=>{

await page.goto("https://www.leafground.com/select.xhtml")
await page.locator("[id='j_idt87:country_label']").click()
await page.locator("[id='j_idt87:country_3']").click()
await page.waitForTimeout(5000)
//Select Country

})