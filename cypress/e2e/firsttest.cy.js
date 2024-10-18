describe('Login Test', () => {
    it('Launch Application', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index', {failOnStatusCode:false})
      cy.get("input[name='username']").type('test')
      cy.get("input[name='password']").type('test')

    })
  })