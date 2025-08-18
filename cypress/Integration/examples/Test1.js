//cypress - Spec

describe('My First Test Suite', () => {

    it('My First Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        //Find element and type in it
        cy.get('input.search-keyword').type('ca')
        cy.wait(2000)

        //find matching visible elements only and verify count
        cy.get('.product:visible').should('have.length',4).then( () => {

        // JS code. Print on browser console
        console.log('sf')
        }) 

        //Aliasing --> same locator use in multiple places ,then store it in var-->change in one place only
        cy.get('.products').as('productLocator')

        //find child elements within parent element
        cy.get('@productLocator').find('.product').should('have.length',4)

        // Get the DOM element containing the text
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()

        // Iterate over each element and perform action
        cy.get('@productLocator').find('.product').each(($el,index,$list) => {

            // $el is a wrapped jQuery element

            const vegText=$el.find('h4.product-name').text() // pure jquey now
            if(vegText.includes('Carrot'))
            {
                cy.wrap($el).contains('ADD TO CART').click()
            }

        })

        // To find the text of DOM element

        cy.get('[class="brand greenLogo"]').then( (logoElement) =>{

            const logoText=logoElement.text()

            // Print on TestRunner log
            cy.log(logoText)

        })  


         cy.get('[class="brand greenLogo"]').should('have.text','GREENKART')

        

    })
    
 })


