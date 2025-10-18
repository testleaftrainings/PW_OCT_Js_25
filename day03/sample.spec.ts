//spec.ts -> test specifications for typescript
import test, { chromium, webkit } from '@playwright/test'

test("Launch the browser",async()=>{
//launch browser ->
const browser= await webkit.launch({headless:false})
//window
const context= await browser.newContext()
//page
const page= await context.newPage()
//url
await page.goto("https://platform.testleaf/#")



//npx playwright test filename.spec.ts
//execute from workspace



})