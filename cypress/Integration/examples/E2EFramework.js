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

        cy.get('app-card.col-lg-3').eq(0).contains('Add').click()

        cy.contains('Checkout').click()

        let sum=0

        cy.get('.table td:nth-child(4).text-center strong').each( ($el,index,$list)=>{

            // ₹. 85000
            // fetch text which includes price of each element in text,then use split() to get only number section
            // then use trim() to discard spaces and Number() to convert into number
            
            const amount=Number($el.text().split(" ")[1].trim())
            sum=sum+amount
            // use then() to execute assertion only after adding is done as js is asynchronous
        }).then ( ()=>{

            expect(sum).to.lessThan(2000000)
        })

        cy.contains('Checkout').click()
        cy.get('#country').type('Ind')
        cy.wait(2000)
        cy.get('.suggestions ul a').filter(':contains("India")').click()
        cy.contains('Purchase').click()
        cy.get('.alert-success.alert-dismissible').should('contain','Success')


        
   })

})
