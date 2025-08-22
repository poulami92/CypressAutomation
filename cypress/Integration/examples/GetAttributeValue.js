/// <reference types="Cypress" />

describe('Get Attribute value', () => {

    it('Get Attribute value', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#hide-textbox').should('have.attr','value','Hide')

        // invoke attr function to get attribute value

        cy.get('#hide-textbox').invoke('attr','value').should('eq','Hide')

        // invoke val function to get Value attribute

        cy.get('#hide-textbox').invoke('val').should('equal','Hide')

        // JQuery method to store attribute value

        cy.get('#hide-textbox').then( (el=>{

            const propValue= el.prop('value')
            expect(propValue).to.equal('Hide')
        }))

        
    })
    
 })


