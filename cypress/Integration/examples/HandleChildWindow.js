/// <reference types="cypress" />

describe('My Second Test Suite', () => {

    it('My Second Test Case', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.window().then( (win) =>{
           cy.stub(win,'open').as('windowOpen')

        })
         
        cy.get('#openwindow').click(); 

        cy.get('@windowOpen').then ((stub) => {

          const url = stub.getCall(0).args[0].replace('http://', 'https://')

          cy.visit(url)

          cy.origin(url,() =>{

            cy.contains('About us').click()
            cy.get('.page-banner-cont h2').should('have.text','About Us')

          })

        })

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('[type="radio"]').check('radio2').should('be.checked')


    })
       
    
 })


