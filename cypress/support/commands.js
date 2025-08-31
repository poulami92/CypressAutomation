// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('submitFormDetails',()=>{

    cy.get('#country').type('Ind')
    //cy.wait(2000)
    cy.get('.suggestions ul a',{ timeout: 6000 }).filter(':contains("India")').click()
    cy.contains('Purchase').click()
    cy.get('.alert-success.alert-dismissible').should('contain','Success')
})


Cypress.Commands.add('clickProduct',(productName)=>{

    cy.get('.products').find('.product').each(($el,index,$list) => {

            // $el is a wrapped jQuery element

            const vegText=$el.find('h4.product-name').text()
            if(vegText.includes(productName))
            {
                cy.wrap($el).contains('ADD TO CART').click()
            }

        })
})