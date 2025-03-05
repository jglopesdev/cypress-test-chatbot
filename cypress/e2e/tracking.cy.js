describe('Order inquiry via chatbot', () => {
  it('It should inform that the order as delivered', () => {

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

  it('It should inform that the order is on the way', () => {

    const trackingCode = 'BR987654321BR'

    cy.openChatBot()
    cy.checkMessage('Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?')
    cy.selectOption('Sim, por favor!')
    cy.checkMessage('Ótimo! Por favor, digite o código de rastreio da sua encomenda:')
    cy.sendMessage(trackingCode)
    cy.checkMessage(`Confirmando: você informou o código de rastreio ${trackingCode}. Está tudo certo?`)
    cy.selectOption('Sim, está certo!')
    cy.checkMessage('Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍')
    cy.checkMessage('A sua encomenda já foi despachada e está a caminho! 🚚 Prazo estimado: 5 dias úteis.', 7000)
  })

  it('It should inform that the order is out for delivery', () => {
    const trackingCode = 'QW112233445BR'

    cy.openChatBot()
    cy.checkMessage('Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?')
    cy.selectOption('Sim, por favor!')
    cy.checkMessage('Ótimo! Por favor, digite o código de rastreio da sua encomenda:')
    cy.sendMessage(trackingCode)
    cy.checkMessage(`Confirmando: você informou o código de rastreio ${trackingCode}. Está tudo certo?`)
    cy.selectOption('Sim, está certo!')
    cy.checkMessage('Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍')
    cy.checkMessage('Ótima notícia! Sua encomenda está em rota de entrega e chega ainda hoje. Fique de olho! 👀📦', 7000)
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
    cy.checkMessage('Hmm... Não encontrei uma encomenda com os dados informados. Vamos tentar de novo? 👀📦', 7000)
    cy.selectOption('Encerrar atendimento')
    cy.checkMessage('Obrigado por falar comigo! 😊 Se precisar de mais alguma coisa, é só chamar.')
  })

})

