describe('Search', () => {
    const searchTerm = 'cypress.io'

    beforeEach(() => {
        cy.intercept(
            'GET',
            `**?q=${searchTerm}**`
        ).as('getSearchResults')

        cy.visit('https://duckduckgo.com')

        cy.get('input[type="text"]')
        .as('searchField')
        .should('be.visible')
    })

    it('digita e dar enter', () => {
        cy.get('@searchField')
        .type(`${searchTerm}{enter}`)

        cy.wait('@getSearchResults')
    
    });

    it('digita e clica no botão de busca', () => {
        cy.get('@searchField')
        .type(searchTerm)
        cy.get('input[type="submit"')
        .should('be.visible')
        .click()

        cy.wait('@getSearchResults')
    });

    it('types and submits the form directly', () => {
        cy.get('@searchField')
        .type(searchTerm)
        cy.get('form').submit()

        cy.wait('@getSearchResults')
    });
})