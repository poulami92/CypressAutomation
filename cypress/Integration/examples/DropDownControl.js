/// <reference types="cypress" />

describe('Dropdown Control', () => {

    it('Dropdown Control', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Static Dropdown 
        // Pass value as parameter
        cy.get('select').select('option2').should('have.value','option2')

        // select multiple values in multiselect box
        //cy.get('select').select(['option2','option1'])

        // Dynamic Dropdown
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


