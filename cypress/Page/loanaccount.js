class loanAccount{

    client = "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(11) > a:nth-child(1) > i:nth-child(1)"
    clientboard = "li[ng-if='!groupid'] a[class='ng-binding']"
    clientList = "List of Clients"
    clientTable = '.content'
    selclient = 'tbody > tr:nth-of-type(1)'
    cliPage = '.toolbar'
    clientNumber = 'borrower000000179'
    generalTab = 'li:nth-of-type(1) > .nav-link.ng-binding'
    newLoantab = '.btn-group.col-md-11.col-sm-11.ng-scope.pull-right.row > a:nth-of-type(2)'
    productDropdown = 'select#productId'
    product = 'Amare Loan'
    purposeDropdown = 'div#loanPurposeId_chosen > .chosen-single'
    purpose = '[data-option-array-index="1"]'
    loanofficerDropdown = 'select#loanOfficerId'
    officer = 'c, bharath'
    disburmentDate = 'input#expectedDisbursementDate'
    disburbDay = 'form[name="Details"] > fieldset > table:nth-of-type(1) .dropdown-menu.ng-empty.ng-scope.ng-valid.ng-valid-date.ng-valid-date-disabled  .ng-isolate-scope.ng-scope > tbody > tr:nth-of-type(6) > .text-center  .ng-binding'
    linkSavingsdropdown = 'select#linkAccountId'
    linksavings = 'number:111'
    nextdetailsPagebutton = 'form[name="Details"]  .btn.btn-default.pull-right'
    nextTermsPagebutton = 'form[name="Terms"]  .btn.btn-default.pull-right'
    nextChargespagebutton = 'form[name="Charges"]  .btn.btn-default.pull-right'
    submitButton = 'button#save'
    submissionHeadling = '.gray-head .ng-binding'
    accountdetailsSummarytable = '.ng-isolate-scope.scrollable > div > div:nth-of-type(1)' 

    selectClient(){
        cy.get(this.client).click()
        cy.get(this.clientboard).click()
    }

    listofClient(){
        cy.contains(this.clientList).should('be.visible')
        cy.get(this.clientTable).should('be.visible')
    }

    selectAclient(){
        cy.get(this.selclient).click()
    }

    clientPage(){
        cy.url().should('eq', 'https://demo.mifos.io/#/viewclient/179')
        cy.get(this.cliPage).should('be.visible')
        cy.contains(this.clientNumber)
    }

    general(){
        cy.get(this.generalTab).click()
    }

    newLoan(){
        cy.get(this.newLoantab).click()
    }

    selectProduct(){
        cy.get(this.productDropdown).select(this.product)
    }

    detailsPage(){
        cy.get(this.purposeDropdown).click()
        cy.get(this.purpose).click()
        cy.get(this.loanofficerDropdown).select(this.officer)
        cy.get(this.disburmentDate).click()
        cy.get(this.disburbDay).click()
        cy.get(this.linkSavingsdropdown).select(this.linksavings)
    }

    nextdetailsPage(){
        cy.get(this.nextdetailsPagebutton).click()

    }

    nextTermsPage(){
        cy.get(this.nextTermsPagebutton).click()
    }

    nextChargespage(){
        cy.get(this.nextChargespagebutton).click()
    }

    submitLoan(){
        cy.get(this.submitButton).click()
        cy.get(this.accountdetailsSummarytable).should('be.visible')

    }

}
export default loanAccount