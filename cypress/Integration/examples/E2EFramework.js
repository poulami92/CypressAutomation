//cypress - Spec

describe('End to End Ecommerce Test', () => {

    it('Submit Order', () => {

        const pdtName ='Nokia Edge'

        cy.visit('https://rahulshettyacademy.com/loginpagePractise/#')

        cy.get('#username').type('rahulshettyacademy')
        cy.get('#password').type('learning')

        cy.contains('Sign In').click()

        cy.contains('Shop Name').should('be.visible')

        cy.get('app-card.col-lg-3').should('have.length',4)

        cy.get('app-card.col-lg-3').each( ($el,index,$list)=>{

           const pdt=  $el.find('.card-title a').text()
           if(pdt==='Blackberry')
           {
            cy.wrap($el).contains('Add').click()
           }

        })

        // narrow down set of matched elements based on condition provided

        cy.get('app-card.col-lg-3').filter(`:contains("${pdtName}")`).then( ($el)=>{

            cy.wrap($el).contains('Add').click()

        })


        
   })

})
