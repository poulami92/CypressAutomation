/// <reference types="cypress" />

describe('My Second Test Suite', () => {

    it('My Second Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.get('table.table-display').find('tr').each( ($el,index,$list) =>{

 //       const subject = $el.find('td').eq(1).text()
          const subject = $el.find('td:nth-child(2)').text()

          if(subject.includes('Master Selenium'))
          {
            //find list sibling
            cy.wrap($el).find('td').last().should('have.text','25')

            //find following sibling

//          cy.get('table.table-display tr td:nth-child(2)').eq(index-1).next().should('have.text','25')

          }

        })

    })
    
 })


