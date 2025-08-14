/// <reference types="Cypress" />

describe('My Second Test Suite', () => {

    it('My Second Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Checkbox check

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        cy.get('[type="checkbox"]').check()

        cy.get('[type="checkbox"]').uncheck()

        // Pass values as parameter
        cy.get('[type="checkbox"]').check(['option1','option3'])

    })
    
 })


