/// <reference types="cypress" />

describe('Generate Auto Script', () => {

    it('Generate Auto Script', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


        /* ==== Generated with Cypress Studio ==== */
        cy.get('#dropdown-class-example').select('option1');
        cy.get('tbody > :nth-child(2) > :nth-child(4)').should('have.text', '23');
        cy.get('#openwindow').click();
        /* ==== End Cypress Studio ==== */
    })
    
 })


