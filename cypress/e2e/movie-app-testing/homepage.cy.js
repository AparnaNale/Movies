describe('movie app test package', () => {

    it('should open homepage', function () {
        cy.visit('http://localhost:3000')
        cy.get('[data-cy=movie-title]', { timeout: 15000 }).should('exist')
        cy.get('[data-cy=movie-year]', { timeout: 15000 }).should('exist')
        cy.get('[data-cy=add-to-fav]', { timeout: 15000 }).should('exist')
        cy.get('[data-cy="add-to-fav"]', { timeout: 15000 }).first().click({ force: true });
    })

    it('should search movie', function () {
        cy.visit('http://localhost:3000')
        cy.get('[data-cy=search-movie]', { timeout: 15000 }).type('wanted')
        cy.get('[data-cy=search-click]').click()
        cy.get('[data-cy=fav]').click()
        cy.get('[data-cy=movies]').click()
        


    })
})