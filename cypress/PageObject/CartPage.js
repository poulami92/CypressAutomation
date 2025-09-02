import ConfirmationPage from './ConfirmationPage';

class CartPage
{
   getTotalAmount()
   {
    let sum=0
    // return cypress chainable to its caller function
    return cy.get('.table td:nth-child(4).text-center strong').each( ($el,index,$list)=>{

            // ₹. 85000
            // fetch text which includes price of each element in text,then use split() to get only number section
            // then use trim() to discard spaces and Number() to convert into number

            
            const amount=Number($el.text().split(" ")[1].trim())
            sum=sum+amount
            // use then() to execute assertion only after adding is done as js is asynchronous
            // return sum to parent block cy.get()
        }).then ( ()=>{
             return sum
        })

        
   }

   goToConfirmation()
   {
    cy.contains('Checkout').click()
    return new ConfirmationPage()
   }
}

export default CartPage;