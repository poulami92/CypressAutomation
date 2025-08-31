//cypress - Spec

describe('Customized Command', () => {

    it('Customized Command', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('input.search-keyword').type('ca')

        // cy.get('.products').find('.product').each(($el,index,$list) => {

        //     // $el is a wrapped jQuery element

        //     const vegText=$el.find('h4.product-name').text()
        //     if(vegText.includes('Carrot'))
        //     {
        //         cy.wrap($el).contains('ADD TO CART').click()
        //     }

        // })

        cy.clickProduct('Carrot')

        cy.get('a[class="cart-icon"]').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
    
 })


