/// <reference types="Cypress" />

describe('My Second Test Suite', () => {

    it('My Second Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#hide-textbox').should('have.attr','value','Hide')

        cy.get('#hide-textbox').invoke('attr','value').should('eq','Hide')

        cy.get('#hide-textbox').invoke('val').should('equal','Hide')

        cy.get('#hide-textbox').then( (el=>{

            const propValue= el.prop('value')
            expect(propValue).to.equal('Hide')
        }))

        
    })
    
 })


