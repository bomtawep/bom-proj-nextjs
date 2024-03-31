describe('Navigation', () => {
    it('should navigate to the about page', () => {
        cy.visit('http://localhost:3000/')
        cy.get('nav').should('exist')
    })
})