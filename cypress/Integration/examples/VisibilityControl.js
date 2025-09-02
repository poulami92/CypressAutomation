/// <reference types="cypress" />

describe('Element Visible Scenario', () => {

    it('Element Visible Scenario', () => {
       // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.visit(Cypress.env('url')+'AutomationPractice/')

        cy.get('#displayed-text').should('be.visible')

        cy.get('#hide-textbox').click()

        cy.get('#displayed-text').should('not.be.visible')

        cy.get('#show-textbox').click()

        cy.get('#displayed-text').should('be.visible')
    })
    
 })


