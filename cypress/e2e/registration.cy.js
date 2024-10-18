describe('Registration Test', () => {
    it('Reg Application', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index', {failOnStatusCode:false})
      cy.get('#loginPanel > :nth-child(3) > a').click()
      cy.get("input[id='customer.firstName']").type('RCV')
      cy.get("input[id='customer.lastName']").type('Academy')
        cy.get("input[id='customer.address.street']").type('Collins')
        cy.get("input[id='customer.address.city']").type('Melbourne') 
        cy.get("input[id='customer.address.state']").type("VIC") 
        cy.get("input[id='customer.address.zipCode']").type('1000')
        cy.get("input[id='customer.phoneNumber']").type('00000000')
        cy.get("input[id='customer.ssn']").type('1111111')
        cy.get("input[id='customer.username']").type('rcvtest')
        cy.get("input[id='customer.password']").type('test1234')
        cy.get('#repeatedPassword').type('test1234')
        cy.get('[colspan="2"] > .button').click()  

    })
  })