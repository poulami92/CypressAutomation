/// <reference types="cypress" />

describe('Fake API response', () => {

    it('Fake API response', () => {

    // Mock response to return only 1 record to browser    

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
                   }
               ]  

        }).as('bookRetrievals')

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.get('.btn-primary').click()
        cy.wait('@bookRetrievals').its('response.statusCode').should('eq',200)
        cy.get('app-library-dashboard p').should('have.text','Oops only 1 Book available')

    })

    it('Fake 404 response', () => {

    // Mock response to return 404   

     cy.intercept(
        {
           method : 'GET',
           url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        
        },

        {

            statusCode : 404,
            body: '404 Not Found!'

        }).as('bookRetrievals')


        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.get('.btn-primary').click()
        cy.wait('@bookRetrievals').its('response.statusCode').should('eq',404)
  
    })
    
 })

