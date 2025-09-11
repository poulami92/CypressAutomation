/// <reference types="cypress" />

describe('Mouse Over Scenario', () => {

    it('Mouse Over Scenario', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.get('div.mouse-hover-content').invoke('show')

        // select element having text 'Top' from entire DOM
        cy.contains('Top').click()

        //get current url and validate 
        cy.url().should('include','top')
        
        // click forcefully on hidden element
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')

    })

    it('Mouse Over Scenario', () => {

        cy.visit("https://www.ebay.com")
        cy.get('#s0-1-4-8-11-0-dialog').invoke('show')
        cy.contains('Summary').click()

    })
    
 })

