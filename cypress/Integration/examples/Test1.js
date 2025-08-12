//cypress - Spec

describe('My First Test Suite', () => {

    it('My First Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input.search-keyword').type('ca')
        cy.wait(2000)
        //find matching visible elements only
        cy.get('.product:visible').should('have.length',4)

        //find child elements within parent element
        cy.get('.products').find('.product').should('have.length',4)

        // Get the DOM element containing the text
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

        

    })
    
 })


