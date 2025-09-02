//cypress - Spec

import HomePage from '../../PageObject/HomePage';
import ProductPage from '../../PageObject/ProductPage';
import CartPage from '../../PageObject/CartPage';
import ConfirmationPage from '../../PageObject/ConfirmationPage';

describe('End to End Ecommerce Test', () => {

    //execute before all it() blocks only one time

    before(function() {

        // loading external jason file data into test case
        // resolving promise,then yield file content in js object as data

        cy.fixture('TestData').then((data)=>{

            // scope of data is limited to then() block only,local variable.To use data outside then() block
            // have to assign data to class instance variable this.data
            // this.data is accesible accross entire file,global variable

            this.data=data
            this.homePage= new HomePage()
        })

    })

    it('Submit Order', function() {   

         // for entire TC default timeout change
         // accessing value from cypress.config.js

  //    Cypress.config('defaultCommandTimeout',10000)

        const pdtName =this.data.productName

        this.homePage.goTo(Cypress.env('url')+"loginpagePractise/#")
        const productPage = this.homePage.login(this.data.username,this.data.password)

        productPage.pageValidation()

        //Test paused untill we hit resume button from test runner
        //cy.pause()

        productPage.getCardCount().should('have.length',4)
        productPage.selectProduct(this.data.productName)
        productPage.selectFirstProduct()
        const cartPage= productPage.goToCart()
        
        cartPage.getTotalAmount().then((sum)=>{
            expect(sum).to.be.lessThan(2000000)
        })
        const confirmationPage= cartPage.goToConfirmation()

        confirmationPage.submitForm()
        confirmationPage.getAlertMessage().should('contain','Success')
        
   })

})
