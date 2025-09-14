/// <reference types="cypress" />

describe('API response Validate', () => {

    it('Fake API response validate', () => {

     cy.intercept(
        {
           method : 'GET',
           url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        
        },

        {

            statusCode : 200,
            body :
               [
                   {
                    "book_name":"RestAssured with Java",
                    "isbn":"DSR",
                    "aisle":"2304"
                   },
                   {
                    "book_name":"RestAssured with Java",
                    "isbn":"DSR",
                    "aisle":"2304"
                   }
               ]  

        }).as('bookRetrievals')

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.get('.btn-primary').click()
        cy.wait('@bookRetrievals').then((interception) => {

        cy.get('tbody tr').should('have.length',interception.response.body.length)

        })
        

    })


     it('Actual API response validate', () => {

     cy.intercept(
        {
           method : 'GET',
           url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        
        }).as('bookRetrievals')

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.get('.btn-primary').click()
        cy.wait('@bookRetrievals').then((interception) => {

        cy.get('tbody tr').should('have.length',interception.response.body.length)

        })
        

    })
    
 })

