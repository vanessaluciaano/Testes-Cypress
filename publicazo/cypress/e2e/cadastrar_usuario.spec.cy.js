
//Os campos obrigatórios são: Nome, e-mail, senha e confirmação de senha.
//O e-mail deverá ser único por usuário.

describe('Este caso de uso permite que novos usuários possam se cadastrar no sistema para realizar operações de forma autenticada.', () => {
  beforeEach(function () {
    cy.visit('http://publicazo.insprak.com/')
  })

  it('Cadastrar usuário com sucesso', () => {
    //O usuário preencher os campos: Nome, e-mail, senha e confirmação de senha.
    //O usuário clica no botão 'Cadastrar'.
    //O sistema exibe uma mensagem de sucesso.

    cy.contains('Cadastre-se').click()

    cy.get('#user_fullname').type('Vanessa Luciano6')
    cy.get('#user_email').type('vanessa.test6@teste.com')
    cy.get('#user_password').type('123456')
    cy.get('#user_password_confirmation').type('123456')

    cy.get('.btn').click()

    cy.get('.toast-message').should('be.visible')

  })

  it('Exibe mensagem de erro se o usuário preenche senha com menos de 6 digitos', () => {
    //O usuário preencher os campos: Nome, e-mail, senha e confirmação de senha com menos de 6 digitos.
    //O usuário clica no botão 'Cadastrar'.
    //O sistema exibe uma mensagem de sucesso.

    cy.contains('Cadastre-se').click()

    cy.get('#user_fullname').type('Vanessa Luciano7')
    cy.get('#user_email').type('vanessa.test7@teste.com')
    cy.get('#user_password').type('12345')
    cy.get('#user_password_confirmation').type('12345')

    cy.get('.btn').click()

    cy.get('.toast-message').should('be.visible')

  })

  it('Exibe mensagem de erro quando o usuario não preenche nenhuma campo e clica em cadastrar', () => {
    //O usuário não preenche nenhum campo.
    //O usuário clica no botão 'Cadastrar'.
    //O sistema exibe uma mensagem de erro.

    cy.contains('Cadastre-se').click()
    cy.get('.btn').click()

    cy.get('.toast-message').should('be.visible')
  })

  it('Exibe mensagem de erro quando o usuário digita um email invalido e clica em cadastrar', () => {
    //O usuário preenche e-mail inválido.
    //O usuário clica no botão 'Cadastrar'.
    //O sistema exibe uma mensagem de erro.
    cy.contains('Cadastre-se').click()


    cy.get('#user_fullname').type('Vanessa Luciano7')
    cy.get('#user_email').type('vanessa.test7.teste.com')
    cy.get('#user_password').type('12345')
    cy.get('#user_password_confirmation').type('12345')

    cy.get('.btn').click()

    //adicionar o parametro que identifica a mensagem de erro 
    cy.get('').should('be.visible')
  })

  it('Sistema exibe mensagem de erro quando usuario digita senhas divirgentes e clica em cadastrar', () => {
    //O usuário preenche senha e confirmação de senha divergentes.
    //O usuário clica no botão 'Cadastrar'.
    //O sistema exibe uma mensagem de erro.
    cy.contains('Cadastre-se').click()

    cy.get('#user_fullname').type('Vanessa Luciano7')
    cy.get('#user_email').type('vanessa.test7@teste.com')
    cy.get('#user_password').type('1234578')
    cy.get('#user_password_confirmation').type('123467')

    cy.get('.btn').click()

    cy.get('.toast-message').should('be.visible')
  })

  it('Usuario não preenche o campo Nome e clica em cadastrar', () => {
    //O usuário não preenche apenas o campo Nome
    //O usuário clica no botão 'Cadastrar'
    //O sistema exibe mensagem de erro

    cy.contains('Cadastre-se').click()

    cy.get('#user_email').type('vanessa.test7@teste.com')
    cy.get('#user_password').type('123456')
    cy.get('#user_password_confirmation').type('123456')


    cy.get('.btn').click()

    cy.get('.toast-message').should('be.visible')
  })

  it('Cadastrar usuário com email já cadastrado', () => {
    //O usuário preencher os campos: Nome, e-mail com email ja cadastrado, senha e confirmação de senha.
    //O usuário clica no botão 'Cadastrar'.
    //O sistema exibe uma mensagem de sucesso.

    cy.contains('Cadastre-se').click()

    cy.get('#user_fullname').type('Vanessa Luciano9')
    cy.get('#user_email').type('vanessa.test6@teste.com')
    cy.get('#user_password').type('123456')
    cy.get('#user_password_confirmation').type('123456')

    cy.get('.btn').click()

    cy.get('.toast-message').should('be.visible')

  })
})