/// <reference types="cypress" />

describe('API testing', () => {

    it('API testing', () => {

        cy.request('POST','http://216.10.245.166/Library/Addbook.php',
            {
                 "name": "Learn API",
                 "isbn": "dfrgds",
                 "aisle": "22e6",
                 "author": "Jon P"

            }
        ).then(function(response)
        {
            expect(response.body).to.have.property("Msg","successfully added")
            expect(response.status).to.eq(200)
        })  

    })
    
 })

