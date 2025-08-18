/// <reference types="Cypress" />

describe('My Second Test Suite', () => {

    it('My Second Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // cy.get('#opentab').click()   // open tab in separate browser tab 
 
        cy.get('#opentab').invoke('removeAttr','target').click()  // open tab in same browser window
        
        // Cross domain issue
        
        cy.origin('https://www.qaclickacademy.com/', () =>{

            cy.contains('About us').click()

            cy.get('.page-banner-cont h2').then ( ($txt) =>{

                const text = $txt.text()
                expect(text).to.equal('About Us')

            })

            cy.get('.page-banner-cont h2').should('have.text','About Us')

            cy.get('.page-banner-cont h2').should('contain','About Us')

        })
        
        

    })
    
 })


