import dotenv from 'dotenv'
import test from 'playwright/test'

//set path where env file is present
dotenv.config({path:'utils/Dev.env'})

test('Login with ENV',async({page})=>{

    //process.env.variable
    //process-> global object for node.js
    //env-> enviroment variable
    //variable-> SF_username

    console.log(process.env.SF_username)
    let uName=process.env.SF_username as string
    let pw=process.env.SF_password as string 

    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill(uName)
    await page.locator("#password").fill(pw)
    await page.locator("#Login").click()





})