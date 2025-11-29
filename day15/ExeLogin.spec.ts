import test from '@playwright/test'
import { LoginPage } from './Login'

test("Login with Wrappper methods",async({page})=>{

const lp= new LoginPage(page)
await lp.launchApp("http://leaftaps.com/opentaps/control/main")
await lp.loginData("DemoSalesmanager","crmsfa")
await lp.clickLogin()




})