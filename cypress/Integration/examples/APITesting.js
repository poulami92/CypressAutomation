/// <reference types="cypress" />

describe('API testing', () => {

    it('API testing', () => {

        cy.request('POST','http://216.10.245.166/Library/Addbook.php',
            {
                 "name": "Learn API",
                 "isbn": "dfrgds",
                 "aisle": "34e9",
                 "author": "Jon P"

            }
        ).then(function(response)
        {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property("Msg","successfully added")
            expect(response.body.Msg).to.eq("successfully added")
            expect(response.headers.server).to.eq('Apache')
            
        })  

    })
    
 })

