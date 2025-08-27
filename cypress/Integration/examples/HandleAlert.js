/// <reference types="Cypress" />

describe('Handle Alert/Confirm Dialog', () => {

    it('Handle Alert/Confirm Dialog', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // On window.alert() trigger perform action

        cy.on('window:alert',(str) =>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
   
        // On window.confirm() trigger perform action

        cy.on('window:confirm',(str) =>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
            return false;    // simulate cancel on confirm dialog, no return or return true simulates OK
        })

        cy.get('#confirmbtn').click()

        cy.get('[type="checkbox"]').check('option2')

        cy.get('#alertbtn').click()

    })
    
 })


