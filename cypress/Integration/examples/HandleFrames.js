/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('Frame handle', () => {

    it('Frame handle', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Click the mentorship link inside the iframe
        cy.iframe('#courses-iframe').find('a[href="mentorship"]').eq(0).click()

        cy.wait(1000)

        // Re-query the iframe for the new content after click
        cy.iframe('#courses-iframe').find('div.pricing-container').should('have.length',2)
    })
    
})
