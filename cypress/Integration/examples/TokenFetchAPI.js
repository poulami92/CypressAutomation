/// <reference types="cypress" />

describe('JWT Session', () => {         
    
    it('JWT Session', () => {

        cy.LoginAPI()

        cy.visit('https://rahulshettyacademy.com/client/',
           {
               onBeforeLoad : function(window)
                {
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
                    
            }
        )
        
        cy.get('.card-body button:last-of-type').eq(1).click()
        cy.get('button[routerlink="/dashboard/cart"]').click()
        cy.contains('Checkout').click()

        cy.get('input[placeholder="Select Country"]').type('ind')
        cy.wait(2000)
        cy.get('button.list-group-item').each(($el,index,$list)=>{
            const country=$el.text().trim()
            if(country==='India')
            {
                cy.wrap($el).click()
            }
        })

        cy.contains('Place Order').click()
        //cy.wait(2000)
        //cy.get('.order-summary button').click()
        cy.contains('Click To Download').click()

    
    })  
    
    
    
})

