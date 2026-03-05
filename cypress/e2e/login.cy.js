describe('login', () => {
    it('login com sucesso', () => {
        cy.visit('https://www.automationpratice.com.br/login')
        cy.get('#user').type('joao@gmail.com')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('#swal2-title').should('include.text', 'Login realizado')
    })

    it('login com Senha inválida.', () => {
        cy.visit('https://www.automationpratice.com.br/login')
        cy.get('#user').type('joao@gmail.com')
        cy.get('#password').type('123')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('include.text', 'Senha inválida.')
    })

    it('E-mail inválido', () => {
        cy.visit('https://www.automationpratice.com.br/login')
        cy.get('#user').type('joao.gmail.com')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('include.text', 'E-mail inválido')
    })

    it('login senha Vazia', () => {
        cy.visit('https://www.automationpratice.com.br/login')
        cy.get('#user').type('joao@gmail.com')

        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('include.text', 'Senha inválida.')
    })

    it('login email Vazio', () => {
        cy.visit('https://www.automationpratice.com.br/login')

        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('include.text', 'E-mail inválido')
    })
})    