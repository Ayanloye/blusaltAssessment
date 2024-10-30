import loanAccount from '../../Page/loanaccount'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const loan = new loanAccount

And('I select clients from the clients dropdown', () => {
    loan.selectClient()
})

When('I am on the Client list page', () => {
    loan.listofClient()

})

And('I click on a client from the client global list', () => {
    loan.selectAclient()
})

And('I am on the Client page', () => {
    loan.clientPage()
})

Then('I click on the General tab', () => {
    loan.general()
})

And('I click on New Loan', () => {
    loan.newLoan()
})

Then('I select a product from the product list', () => {
    loan.selectProduct()
})

And('I fill all the required field on the from', () => {
    loan.detailsPage()
})

And('I proceed to the Terms page', () => {
    loan.nextdetailsPage()
})

And ('I proceed to Charges page',()=>{
    loan.nextTermsPage()
})

And ('I proceed to Review Page',()=>{
   loan.nextChargespage()
})

Then ('I click on the submit button',()=>{
    loan.submitLoan()
})


