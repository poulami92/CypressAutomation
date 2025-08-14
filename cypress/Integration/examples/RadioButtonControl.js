/// <reference types="Cypress" />

describe('My Second Test Suite', () => {

    it('My Second Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Radio Button

        cy.get('[type="radio"]').check('radio2').should('be.checked')
 
        cy.get('input[value="radio1"]').check().should('be.checked')




    })
    
 })


