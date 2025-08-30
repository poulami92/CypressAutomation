import ConfirmationPage from './ConfirmationPage';

class CartPage
{
   validateTotalAmount()
   {
    let sum=0

    cy.get('.table td:nth-child(4).text-center strong').each( ($el,index,$list)=>{

            // ₹. 85000
            // fetch text which includes price of each element in text,then use split() to get only number section
            // then use trim() to discard spaces and Number() to convert into number
            
            const amount=Number($el.text().split(" ")[1].trim())
            sum=sum+amount
            // use then() to execute assertion only after adding is done as js is asynchronous
        }).then ( ()=>{

            expect(sum).to.lessThan(2000000)
        })
   }

   goToConfirmation()
   {
    cy.contains('Checkout').click()
    return new ConfirmationPage()
   }
}

export default CartPage;