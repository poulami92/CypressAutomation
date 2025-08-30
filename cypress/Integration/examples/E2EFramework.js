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

        cy.fixture('example').then((data)=>{

            // scope of data is limited to then() block only,local variable.To use data outside then() block
            // have to assign data to class instance variable this.data
            // this.data is accesible accross entire file,global variable

            this.data=data
            this.homePage= new HomePage()
        })

    })

    it('Submit Order', function() {   

  //    Cypress.config('defaultCommandTimeout',10000) // for entire TC default timeout change

        const pdtName =this.data.productName

        this.homePage.goTo("https://rahulshettyacademy.com/loginpagePractise/#")
        const productPage = this.homePage.login(this.data.username,this.data.password)

        productPage.pageValidation()
        productPage.verifyCardLimit()
        productPage.selectProduct(this.data.productName)
        productPage.selectFirstProduct()
        const cartPage= productPage.goToCart()
        
        cartPage.validateTotalAmount()
        const confirmationPage= cartPage.goToConfirmation()

        confirmationPage.submitForm()
        confirmationPage.getAlertMessage()
        
   })

})
