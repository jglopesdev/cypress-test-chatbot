describe('Order inquiry via chatbot', () => {
  it('It should show the order as delivered', () => {

    const trackingCode = 'PD123456785BR'

    cy.openChatBot()
    cy.checkMessage('Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?')
    cy.selectOption('Sim, por favor!')
    cy.checkMessage('Ótimo! Por favor, digite o código de rastreio da sua encomenda:')
    cy.sendMessage(trackingCode)
    cy.checkMessage(`Confirmando: você informou o código de rastreio ${trackingCode}. Está tudo certo?`)
    cy.selectOption('Sim, está certo!')
    cy.checkMessage('Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍')
    cy.checkMessage('Boa notícia! Sua encomenda já foi entregue com sucesso. 🎉 Se precisar de algo mais, é só me chamar!', 7000)
  })
})

Cypress.Commands.add('openChatBot', () => {
  cy.viewport('iphone-xr')
  cy.visit('/')
  cy.get('button[aria-label="Open Chat"]')
    .should('be.visible')
    .click()

  cy.get('.rcb-chat-header span')
    .should('be.visible')
    .and('have.text', 'Sensei')
})

Cypress.Commands.add('checkMessage', (expectMessage, timeout = 4000) => {
  cy.contains('.rcb-bot-message', expectMessage, { timeout: timeout })
    .should('be.visible')
})

Cypress.Commands.add('selectOption', (option) => {
  cy.contains('.rcb-options', option)
    .click()
})

Cypress.Commands.add('sendMessage', (message) => {
  cy.get('textarea[placeholder^="Escreva sua mensagem"]')
    .type(message)

  cy.get('.rcb-send-button')
    .click()
})  