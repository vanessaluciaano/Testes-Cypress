
//Para esse caso de teste o usuário deve ter realizado um cadastro no sistema
//Os campos email e senha são obrigatórios


describe('Este caso de uso permite que usuários cadastrados possam se autenticar no sistema.', () => {
    beforeEach(function () {
        cy.visit('http://publicazo.insprak.com/')
    })

    it('O usuário entra no sistema com sucesso', () => {
        //O usuário preencher os campos: E-mail e senha.
        //O usuário clica no botão 'Entrar'.
        //O sistema exibe uma mensagem de sucesso.

        cy.contains('Entrar').click()

        cy.get('#user_email').type('vanessa.test6@teste.com')
        cy.get('#user_password').type('123456')

        cy.get('.btn').click()

        cy.get('.toast-message').should('be.visible')

    })

    it('O sistema envia um email para o usuário recuperar a senha', () => {
        //O usuário clica na opção 'Esqueceu a senha'.
        //O usuário preencher o e-mail cadastrado.
        //O usuário clica no botão 'Enviar as instruções para alterar a senha'.
        //O sistema envia um e-mail para usuário recuperar a senha.

        cy.contains('Entrar').click()

        cy.get('.pull-right > a').click()

        cy.get('#user_email').type('vanessa.test6@teste.com')

        cy.get('.btn').click()

        cy.get('.toast-message').should('be.visible')
    })

    it('O sistema exibe uma mensagem de erro quando o usuário não preenche os campos obrigatórios e clica em entrar', () => {
        //O usuário não preenche nenhum campo.
        //O usuário clica no botão 'Entrar'.
        //O sistema exibe uma mensagem de erro.

        cy.contains('Entrar').click()

        cy.get('.btn').click()

        cy.get('.toast-message').should('be.visible')

    })

    it('O sistema exibe uma mensagem de erro quando o usuário não preenche corretamente a senha', () => {
        //O usuário preenche senha inválida.
        //O usuário clica no botão 'Entrar'.
        //O sistema exibe uma mensagem de erro.

        cy.contains('Entrar').click()

        cy.get('#user_email').type('vanessa.test6@teste.com')
        cy.get('#user_password').type('1234567')

        cy.get('.btn').click()

        cy.get('.toast-message').should('be.visible')


    })

    it('O sistema exibe uma mensagem de erro quando o usuário não preenche corretamente o email', () => {
        //O usuário preenche email inválido.
        //O usuário clica no botão 'Entrar'.
        //O sistema exibe uma mensagem de erro.

        cy.contains('Entrar').click()

        cy.get('#user_email').type('vanessa.test67@teste.com')
        cy.get('#user_password').type('123456')

        cy.get('.btn').click()

        cy.get('.toast-message').should('be.visible')

    })

    it.only('O sistema exibe uma mensagem de erro quando o usuário não preenche corretamente o email e senha', () => {
        //O usuário preenche senha e email inválido.
        //O usuário clica no botão 'Entrar'.
        //O sistema exibe uma mensagem de erro.

        cy.contains('Entrar').click()

        cy.get('#user_email').type('vanessa.test67@teste.com')
        cy.get('#user_password').type('1234568')

        cy.get('.btn').click()

        cy.get('.toast-message').should('be.visible')

    })
})