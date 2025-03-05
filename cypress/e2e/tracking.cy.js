describe('Order inquiry via chatbot', () => {

  const scenarios = [
    {title: 'It should inform that the order as delivered', trackingCode: 'PD123456785BR', finalMessage: 'Boa notícia! Sua encomenda já foi entregue com sucesso. 🎉 Se precisar de algo mais, é só me chamar!'},
    {title: 'It should inform that the order is on the way', trackingCode: 'BR987654321BR', finalMessage: 'A sua encomenda já foi despachada e está a caminho! 🚚 Prazo estimado: 5 dias úteis.'},
    {title: 'It should inform that the order is out for delivery', trackingCode: 'QW112233445BR', finalMessage: 'Ótima notícia! Sua encomenda está em rota de entrega e chega ainda hoje. Fique de olho! 👀📦'}
  ]

  scenarios.forEach((scenario) => {
    it(scenario.title, () => {
  
      cy.openChatBot()
      cy.checkMessage('Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?')
      cy.selectOption('Sim, por favor!')
      cy.checkMessage('Ótimo! Por favor, digite o código de rastreio da sua encomenda:')
      cy.sendMessage(scenario.trackingCode)
      cy.checkMessage(`Confirmando: você informou o código de rastreio ${scenario.trackingCode}. Está tudo certo?`)
      cy.selectOption('Sim, está certo!')
      cy.checkMessage('Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍')
      cy.checkMessage(scenario.finalMessage, 7000)
    })
  })

  it('It should display an error for tracking code not found', () => {
    const trackingCode = 'AB123456789XY'

    cy.openChatBot()
    cy.checkMessage('Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?')
    cy.selectOption('Sim, por favor!')
    cy.checkMessage('Ótimo! Por favor, digite o código de rastreio da sua encomenda:')
    cy.sendMessage(trackingCode)
    cy.checkMessage(`Confirmando: você informou o código de rastreio ${trackingCode}. Está tudo certo?`)
    cy.selectOption('Sim, está certo!')
    cy.checkMessage('Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍')
    cy.checkMessage('Hmm... Não encontrei uma encomenda com os dados informados. Vamos tentar de novo?', 7000)
    cy.selectOption('Encerrar atendimento')
    cy.checkMessage('Obrigado por falar comigo! 😊 Se precisar de mais alguma coisa, é só chamar.')
  })

})

