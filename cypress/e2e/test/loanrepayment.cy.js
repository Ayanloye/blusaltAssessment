import loanRepayment from "../../Page/loanrepayment";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const repay = new loanRepayment

Then ('I select loan to repay',()=>{
    repay.selectDisburseLoan()
})

Then ('I click Repayment button to repay the Loan',()=>{
    repay.makePayment()
})

And ('I select transaction Date',()=>{
    repay.selectTransactiondate()
})

Then ('I click submit button',()=>{
    repay.submitRepayment()
})

And ('I confirm loan has been repaid',()=>{
    repay.repaymentSchedule()
})

