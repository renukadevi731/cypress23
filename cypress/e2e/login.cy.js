

describe('lagin credentials ', () => {
    Cypress.on('uncaught:exception', () => {
        return false;
    })
    it('lagin with valid user name ,valid password', () => {
        cy.visit ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('')
    
    })



























        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input').type('Admin')
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input').type('admin1234')
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button').click()
    })
    it('lagin with invalid username ,invalid password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('aadmin')
        cy.get('input[type="password"] ').type('admin1234')
        cy.get('button[type="submit"]').click()
    })
})
