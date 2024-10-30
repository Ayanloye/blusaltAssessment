class login{

    usernameField = "#uid"
    passwordField = "#pwd"
    username = "mifos"
    password = "password"
    loginButton = "#login-button"
    logout = 'a#user-dropdown'
    logoutt = 'li#user-menu > .dropdown-menu'
    signout = 'a#logout'

    url(){
        cy.visit("/")
        
    }
   
    enterUsername(){
        cy.get(this.usernameField).type(this.username)
    }
    enterPassword(password){
        cy.get(this.passwordField).type(this.password)
    }
    
    loginbutton(){
        cy.get(this.loginButton).click()
        cy.url().should('eq', 'https://demo.mifos.io/#/home')
    }

    logoutbutton(){
        cy.get(this.logout).click()
        cy.get(this.logoutt).click({force:true})
        cy.get(this.signout).click({force:true})

    }
}
export default login