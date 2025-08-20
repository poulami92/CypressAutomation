/// <reference types="Cypress" />

describe('My Second Test Suite', () => {

    it('My Second Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        
        cy.contains('Top Deals').invoke('removeAttr','target').click()

        cy.wait(2000)

        cy.go('back')

        cy.wait(2000)

        cy.go('forward')
        

    })
    
 })

