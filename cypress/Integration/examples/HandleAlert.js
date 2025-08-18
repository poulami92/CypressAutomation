/// <reference types="Cypress" />

describe('My Second Test Suite', () => {

    it('My Second Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.on('window:alert',(str) =>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
   

        cy.on('window:confirm',(str) =>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
            return false;    // simulate cancel on confirm dialog, no return or return true simulates OK
        })

        cy.get('#confirmbtn').click()

        cy.get('[type="checkbox"]').check('option2')

        cy.get('#alertbtn').click()

 


 


    })
    
 })


