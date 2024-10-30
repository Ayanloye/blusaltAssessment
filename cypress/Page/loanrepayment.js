class loanRepayment{
disburseLoan = '[class] tbody [ng-repeat="loanaccount in clientAccounts\.loanAccounts \| orderBy\:\'id\'\:true \| filter\:isLoanNotClosed"]:nth-of-type(2)'
makePaymentbutton = '.btn-group.pull-right > a:nth-of-type(4)'
transactionDate = 'fieldset > div:nth-of-type(2) > .col-sm-3'
todaysDate = '.dropdown-menu.ng-invalid.ng-invalid-date-disabled.ng-not-empty.ng-scope.ng-valid-date  .ng-isolate-scope.ng-scope > tbody > tr:nth-of-type(6) > .text-center  .ng-binding'
submitPaymentButton = 'button#save'
repaymentScheduleButton = 'li:nth-of-type(3) > .nav-link.ng-binding'
repaymentScheduleTable = '.ng-isolate-scope.scrollable > div > div:nth-of-type(3)'

selectDisburseLoan(){
    cy.get(this.disburseLoan).click()
    cy.wait(3000)
}
makePayment(){
    cy.get(this.makePaymentbutton).click()
}
selectTransactiondate(){
    cy.get(this.transactionDate).click()
    cy.get(this.todaysDate).click()
}
submitRepayment(){
    cy.get(this.submitPaymentButton).click()
}
repaymentSchedule(){
    cy.get(this.repaymentScheduleButton).click().click()
    cy.get(this.repaymentScheduleTable).should('be.visible')
}

}
export default loanRepayment