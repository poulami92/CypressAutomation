/// <reference types="cypress" />
// const neatCSV=require('neat-csv') 

import neatCSV from 'neat-csv'

let productName
describe('JWT Session', () => {         
    
    it('JWT Session', () => {

        cy.LoginAPI()

        cy.visit('https://rahulshettyacademy.com/client/',
           {
               onBeforeLoad : function(window)
                {
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
                    
            }
        )
        cy.get('.card-body b').eq(1).then(($el)=>{

            productName=$el.text()
        })

        //get last element from a list of same type elements
        cy.get('.card-body button:last-of-type').eq(1).click()
        cy.get('button[routerlink="/dashboard/cart"]').click()
        cy.contains('Checkout').click()

        cy.get('input[placeholder="Select Country"]').type('ind')
        cy.wait(2000)
        cy.get('button.list-group-item').each(($el,index,$list)=>{
            const country=$el.text().trim()
            if(country==='India')
            {
                cy.wrap($el).click()
            }
        })

        cy.contains('Place Order').click()
        //cy.wait(2000)
        //cy.get('.order-summary button').click()
        cy.contains('Click To Download').click()

        //read csv file and yield data to text variable

        const filePath = Cypress.config('fileServerFolder')+"/cypress/downloads/order-invoice_Gpd.csv"

        cy.readFile(filePath)
        .then(async function(text){

           //convert CSV data to jS array of objects
            const csv = await neatCSV(text) // Await the promise
            console.log(csv)
            const csvPdtName=csv[0]["Product Name"]
            expect(productName).to.equal(csvPdtName)
        })

        //validate contents of any file

        cy.readFile(filePath).then((text)=>{
            expect(text).to.include(productName)
        })

        

    
    })  
    
    
    
})

