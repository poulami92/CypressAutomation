/// <reference types="Cypress" />

describe('My Second Test Suite', () => {

    it('My Second Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Static Dropdown 
        // Pass value as parameter
        cy.get('select').select('option2').should('have.value','option2')

        // Dynamic Dropdow
        cy.get('#autocomplete').type('ind')
        cy.get('li.ui-menu-item div').each( ($el,index,$list) =>{

            const countryName = $el.text()
            if(countryName==='India')
            {
                cy.wrap($el).click()
            }

        })

        cy.get('#autocomplete').should('have.value','India')
    })
    
 })


