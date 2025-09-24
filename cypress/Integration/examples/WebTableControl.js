/// <reference types="cypress" />

describe('My Second Test Suite', () => {

    it('My Second Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.get('.table-display tr td:nth-child(2)').each( ($el,index,$list) =>{

 //       const subject = $el.find('td').eq(1).text()
          const subject = $el.text()

          if(subject.includes('Master Selenium'))
          {
            //find next sibling
            cy.wrap($el).next().should('have.text','25')

            //find following sibling

            cy.get('.table-display tr td:nth-child(2)').eq(index).next().should('have.text','25')

          }

        })

    })
    
 })
