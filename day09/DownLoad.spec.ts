//download the file with event listener

import test from '@playwright/test'
test("Download the file",async({page})=>{

await page.goto("https://www.leafground.com/file.xhtml")

//create Promise
const down=page.waitForEvent('download')

//do the action
await page.locator("//span[text()='Download']").click()

//reslove promise
const fileDownload=await down

//set path where it should download 
await fileDownload.saveAs("utils/"+fileDownload.suggestedFilename())
})