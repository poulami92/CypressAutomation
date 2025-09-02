class ConfirmationPage
{
    submitForm()
    {
        // cy.get('#country').type('Ind')
        // cy.wait(2000)
        // cy.get('.suggestions ul a',{ timeout: 6000 }).filter(':contains("India")').click()
        // cy.contains('Purchase').click()

        cy.submitFormDetails() // customized cypress command
        

    }

    getAlertMessage()
    {
       return cy.get('.alert-success.alert-dismissible')    
    }
}

export default ConfirmationPage;