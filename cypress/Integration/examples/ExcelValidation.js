/// <reference types="cypress" />

describe('Excel Validation', () => {         
    
    it('Excel Validation', () => {

        cy.visit('https://www.sampledocs.in/BrowseFile/DummyFiles/xls')

        cy.get('.btn-sm').eq(6).click()

        const filePath = Cypress.config('fileServerFolder')+"/cypress/downloads/SampleDocs-SampleXLSFile_38kb.xls"

        //Execute task to convert excel file json object

        cy.task('excelToJsonConverter',filePath).then((result)=>{

            cy.log(result["Sample-spreadsheet-file"][0].B)


        })

        //validate contents of any file

        cy.readFile(filePath).then((text)=>{
            expect(text).to.include('Neola Schneider')
        })
        
       



    
    })  
    
    
    
})

