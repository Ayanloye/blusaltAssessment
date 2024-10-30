Feature: Blusalt Assessment

    Background:
        Given I am on the login page
        When I enter my username
        And I enter my password
        Then I click on the login button


    Scenario: Loan Account Creation
        And I select clients from the clients dropdown
        When I am on the Client list page
        And I click on a client from the client global list
        And I am on the Client page
        Then I click on the General tab
        And I click on New Loan
        Then I select a product from the product list
        And I fill all the required field on the from
        And I proceed to the Terms page
        And I proceed to Charges page
        And I proceed to Review Page
        Then I click on the submit button
        Then  I logout




    Scenario: Approving a loan
        And I select clients from the clients dropdown
        When I am on the Client list page
        And I click on a client from the client global list
        And I am on the Client page
        Then I click on the General tab
        And I waited for the page to load properly
        Then I select loan to approve
        Then I click Approve button to approve the Loan
        And I added note
        Then I click submit button
        And I confirm loan has been approved
        Then I disburb the Loan
        Then I logout



    Scenario: Loan Repayment
        And I select clients from the clients dropdown
        When I am on the Client list page
        And I click on a client from the client global list
        And I am on the Client page
        Then I click on the General tab
        And I waited for the page to load properly
        Then I select loan to repay
        Then I click Repayment button to repay the Loan
        And I select transaction Date
        Then I click submit button
        And I confirm loan has been repaid
        Then I logout

