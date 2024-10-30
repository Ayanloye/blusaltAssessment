class approveloan{
    clientPage = '.client-title strong'
    loan = '[class] tbody [ng-repeat="loanaccount in clientAccounts\.loanAccounts \| orderBy\:\'id\'\:true \| filter\:isLoanNotClosed"]:nth-of-type(2)'
    confirmPage = '.gray-head.span'
    approveButton = '.col-md-12.col-sm-12.primarydiv > .btn-group.pull-right > a:nth-of-type(2)'
    noteText = 'textarea#note'
    submitButton = 'button#save'
    confirmAprrove = '.ng-isolate-scope.scrollable > div > div:nth-of-type(1)'
    disburbButton = '.col-md-12.col-sm-12.primarydiv > .btn-group.pull-right > a:nth-of-type(2)'
    submitDisburse = 'button#save'
    disburseDatedropdown = 'fieldset > div:nth-of-type(2) > .col-sm-3'
    disburseDate = '.dropdown-menu.ng-not-empty.ng-scope.ng-valid.ng-valid-date.ng-valid-date-disabled  .ng-isolate-scope.ng-scope > tbody > tr:nth-of-type(6) > .text-center  .ng-binding'
    


client(){
    cy.get(this.clientPage).should('be.visible')
    
}

selectLoan(){
    cy.get(this.loan).click()
    cy.get(this.confirmPage).should('be.visible')
}

approveLoan(){
    cy.get(this.approveButton).click()
}

addNote(){
    cy.get(this.noteText).type('This is Testing')
}
submitApproval(){
    cy.get(this.submitButton).click()
}

confirmApproval(){
    cy.get(this.confirmAprrove).should('be.visible')
}

disburseLoan(){
    cy.get(this.disburbButton).click()
    cy.get(this.disburseDatedropdown).click()
    cy.get(this.disburseDate).click()
    cy.get(this.submitDisburse).click()
}

}
export default approveloan
