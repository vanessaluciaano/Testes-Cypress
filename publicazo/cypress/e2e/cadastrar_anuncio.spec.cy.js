//Para esse caso de teste o Usuário deve ter feito cadastro e login no sistema
//Apenas a seção de Fotos não é obrigatório.

describe('Este caso de uso permite que usuários cadastrados possam cadastrar anúncios no sistema.', () => {
    beforeEach(function () {
        cy.visit('http://publicazo.insprak.com/')

        cy.contains('Entrar').click()

        cy.get('#user_email').type('vanessa.test6@teste.com')
        cy.get('#user_password').type('123456')

        cy.get('.btn').click()

    })

    it('O usuario publica um anuncio com sucesso', () => {
        /*O usuário preenche os campos obrigátorios e publica o anuncio.*/
        cy.get('.nav > :nth-child(1) > a').click()

        cy.get('#service_service_category').select('Casa').should('have.value', 'Casa ')
        cy.get('#service_service_type').select('Faxineira').should('have.value', 'Faxineira')
        cy.get('#service_service_mode').select('Em Domicílio').should('have.value', 'Em Domicílio')
        cy.get('#service_payment_period').select('Por Hora').should('have.value', 'Por Hora')
        cy.get('.btn').click()

        cy.get(':nth-child(2) > .sidebar-link').click()
        cy.get('#service_price').type('R$50,00')
        cy.get('.text-center > .btn').click()

        cy.get(':nth-child(3) > .sidebar-link').click()
        cy.get('#service_listing_name').type('Faxineira van')
        cy.get('#service_summary').type('Limpeza diária e faxina pesada')
        cy.get('.text-center > .btn').click()

        cy.get(':nth-child(5) > .sidebar-link').click()
        cy.get('#service_address').type('Paraíba')
        cy.get('.text-center > .btn').click()

        cy.get(':nth-child(6) > .sidebar-link').click()
        cy.get('#service_is_independent').check()
        cy.get('.text-center > .btn').click()

        cy.get('.panel-heading > a > img').click()
        cy.get('#search').type('Faxineira van')
        cy.get('.btn').click()
        cy.get('.dropdown > :nth-child(1)').click()
        cy.get(':nth-child(7) > a').click()
        cy.contains('Faxineira van').should('be.visible')
    })

   /* it.only('O usuário despublica o anuncio com sucesso', () => {
        /*O usuário clica na opção 'Despublicar'.
          O sistema despublica o anúncio.
          O anúncio não ficará disponível na página inicial do sistema.
          
        cy.get('.dropdown > :nth-child(1)').click()
        cy.get(':nth-child(7) > a').click()
        cy.contains('Faxineira van').should('be.visible')
    })*/
})