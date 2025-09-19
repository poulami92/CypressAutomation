import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../../PageObject/HomePage";
import ProductPage from "../../../../PageObject/ProductPage";
import CartPage from "../../../../PageObject/CartPage";
import ConfirmationPage from "../../../../PageObject/ConfirmationPage";

const homePage=new HomePage()

Given('I am on Ecommerce page',function(){

    homePage.goTo(Cypress.env('url')+"loginpagePractise/#")

})

When('I login to application',function(){

    this.productPage = homePage.login(this.data.username,this.data.password)
    this.productPage.pageValidation()
    this.productPage.getCardCount().should('have.length',4)

}) 

When('I login to application portal',function(dataTable){

    //return array of objcets, from which gets the 1st object [{ username: 'user1', password: 'pass1' }] 

    const user=dataTable.hashes()[0] 
    this.productPage = homePage.login(user.username,user.password)

    //this.productPage = homePage.login(dataTable.rawTable[1][0],dataTable.rawTable[1][1])
    this.productPage.pageValidation()
    this.productPage.getCardCount().should('have.length',4)

}) 

When('I add items to cart and checkout',function(){

    this.productPage.getCardCount().should('have.length',4)
    this.productPage.selectProduct(this.data.productName)
    this.productPage.selectFirstProduct()
    this.cartPage= this.productPage.goToCart()
})

When('Validate total price limit',function(){

    this.cartPage.getTotalAmount().then((sum)=>{
        expect(sum).to.be.lessThan(2000000)
    })
})

Then('Select the country and verify Thankyou',function(){

   const confirmationPage= this.cartPage.goToConfirmation()
   confirmationPage.submitForm()
   confirmationPage.getAlertMessage().should('contain','Success')
})

