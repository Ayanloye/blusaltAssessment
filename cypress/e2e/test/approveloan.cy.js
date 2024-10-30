import approveloan from '../../Page/approveloan'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const approve = new approveloan

And('I waited for the page to load properly', () => {
    approve.client()
})

Then ('I select loan to approve',()=>{
    approve.selectLoan()
})

Then ('I click Approve button to approve the Loan',()=>{
    approve.approveLoan()
})

And ('I added note',()=>{
    approve.addNote()
})

Then ('I click submit button',()=>{
   approve.submitApproval() 
})

And ('I confirm loan has been approved',()=>{
    approve.confirmApproval()
})

Then ('I disburb the Loan',()=>{
    approve.disburseLoan()
})

