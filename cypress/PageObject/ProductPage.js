import CartPage from './CartPage';

class ProductPage
{
    pageValidation()
    {
        cy.contains('Shop Name').should('be.visible')

    }

    verifyCardLimit()
    {
       cy.get('app-card.col-lg-3').should('have.length',4)
    }

    selectProduct(productName)
    {
        // select product via looping each product
        cy.get('app-card.col-lg-3').each( ($el,index,$list)=>{

           const pdt=  $el.find('.card-title a').text()
           if(pdt==='Blackberry')
           {
            cy.wrap($el).contains('Add').click()
           }

        })

        // narrow down set of matched elements based on condition provided

        cy.get('app-card.col-lg-3').filter(`:contains("${productName}")`).then( ($el)=>{

            cy.wrap($el).contains('Add').click()

        })
        

    }

    selectFirstProduct()
    {
       // select product based on index

        cy.get('app-card.col-lg-3').eq(0).contains('Add').click()
    }

    goToCart()
    {
         cy.contains('Checkout').click()
         return new CartPage()
    }
}

export default ProductPage;