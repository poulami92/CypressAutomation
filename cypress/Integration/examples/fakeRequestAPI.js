/// <reference types="cypress" />

describe('Fake API request', () => {

    it('Fake API request', () => {

    // Mock request   

        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',(req)=>{

    
       // req.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
       req.query.AuthorName='datta'

           // hit server with mock request
            //req.continue((res)=>{
             //expect(res.statusCode).to.equal(403)
           // })

          req.continue()

        }).as('dummyReqUrl')

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.get('.btn-primary').click()
        cy.wait('@dummyReqUrl').then((interception) => {
          cy.log(interception.response.body.length)
        })
        cy.get('@dummyReqUrl').its('response.statusCode').should('eq', 500)
        


    })          
    
})

