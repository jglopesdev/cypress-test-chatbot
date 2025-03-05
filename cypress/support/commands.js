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