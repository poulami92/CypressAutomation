/// <reference types="cypress" />

describe('CheckBox Control', () => {

    it('CheckBox Control', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Checkbox check

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

        // Uncheck check box

        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        //Check multiple checkboxes

        cy.get('[type="checkbox"]').check()

        //Uncheck multiple check boxes

        cy.get('[type="checkbox"]').uncheck()

        // Pass values as parameter
        cy.get('[type="checkbox"]').check(['option1','option3'])

        cy.get('[type="checkbox"]').uncheck('option1')

    })
    
 })


