/// <reference types="cypress" />

describe('Database Connection', () => {

    it('Database Connection', () => {

     let city

       cy.sqlServer("select * from Persons").then( (result)=>{
          city= result[1][3]

       }).then(function(){

         cy.visit('https://example.cypress.io/commands/waiting')
         cy.get('input.wait-input1').type(city)
       })
     
    })  
})    
       


