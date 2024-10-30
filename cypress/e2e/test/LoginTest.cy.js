import login from '../../Page/login'
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
const Login = new login
// beforeEach(()=>{
//     Cypress.on('uncaught:exeception',()=>{
//         return false
//     })
// })

Given ("I am on the login page",()=>{
    Login.url()
    
})

When("I enter my username",()=>{
    Login.enterUsername()
})

And ("I enter my password",()=>{
    Login.enterPassword()
})

Then ("I click on the login button",()=>{
    Login.loginbutton()
})

Then("I logout",()=>{
    Login.logoutbutton()
})