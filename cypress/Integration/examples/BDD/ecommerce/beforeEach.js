beforeEach(function() {

        // loading external jason file data into test case
        // resolving promise,then yield file content in js object as data

        cy.fixture('TestData').then(function(data){

            // scope of data is limited to then() block only,local variable.To use data outside then() block
            // have to assign data to class instance variable this.data
            // this.data is accesible accross entire file,global variable

            this.data=data
        })

    })