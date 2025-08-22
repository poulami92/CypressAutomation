/// <reference types="Cypress" />

describe('Browser Navigation', () => {

    it('Browser Navigation', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        
        cy.contains('Top Deals').invoke('removeAttr','target').click()

        cy.wait(2000)

        // Move backward

        cy.go('back')

        cy.wait(2000)

        // Move forward

        cy.go('forward')
        

    })
    
 })

