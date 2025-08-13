//cypress - Spec

describe('My First Test Suite', () => {

    it('My First Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        //Find element and type in it
        cy.get('input.search-keyword').type('ca')
        cy.wait(2000)

        //find matching visible elements only and verify count
        cy.get('.product:visible').should('have.length',4)

        //find child elements within parent element
        cy.get('.products').find('.product').should('have.length',4)

        // Get the DOM element containing the text
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        // Iterate over each element and perform action
        cy.get('.products').find('.product').each(($el,indexedDB,$list) => {

            const vegText=$el.find('h4.product-name').text()
            if(vegText.includes('Carrot'))
            {
                cy.wrap($el).contains('ADD TO CART').click()
            }

        })



        

    })
    
 })


