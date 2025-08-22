/// <reference types="Cypress" />


describe('My Second Test Suite', () => {

    it('My Second Test Case', () => {

        const monthNumber = '6'
        const date = '12'
        const year = '2027'

        //define array list
        const expectedList =[monthNumber,date,year]

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.contains('Top Deals').invoke('removeAttr','target').click()

        cy.get('.react-date-picker__calendar-button').click()

        cy.get('.react-calendar__navigation__label').as('YearPicker')

        cy.get('@YearPicker').click()

        cy.get('@YearPicker').click()

        //cy.contains method with selector and text

        cy.contains('button',year).click()

        //convert String to number

        cy.get('.react-calendar__year-view__months__month').eq(Number(monthNumber)-1).click()

        cy.contains(date).click()

        cy.get('input.react-date-picker__inputGroup__input').each( ($el,index,$list)=>{

            //get the value attribute of element and assert it with array list in iteration

            cy.wrap($el).invoke('val').should('eq',expectedList[index])

        })

        

    })
    
})
