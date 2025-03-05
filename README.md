# Automação de Chatbot orientado à gatilhos

Projeto criado a partir dos conhecimentos aprendidos durante o mini treinamento NinjadoCypress, ministrado pelo [Fernando Papito](https://www.udemy.com/user/fernando-papito/) onde fizemos a automação de testes de um chatbot simples, orientado à gatilhos.

## Pré condições

É necessário ter instalado o Node.js e o npm para executar este projeto.

> Eu usei a versão `v18.20.7` and `10.8.2` do Node.js e npm, respectivamente. Eu sugiro que você use a mesma versão do Node.js para não ter problemas para subir a api e o servidor web.

## Subir ambiente de testes

Neste [link](https://gusty-colby-4b4.notion.site/Configura-o-do-Ambiente-do-WebDojo-Windows-Mac-e-Linux-1a8d8c455ab380fea1a1fbc056e62a4e) você pode ver as orientações para subir o ambiente de testes.

## Instalação

Execute o comando `npm i cypress` para instalar o Cypress.

> Recomendo utilizar a versão `14.1.0` que foi a que utilizei neste projeto.

## Testes

Execute o comando `npx cypress run` para executar o teste em modo headless.     
Ou, execute o NPM Script já criado `cy:run` para executar o teste em modo headless.     

Execute o comando `npx cypress open` para executar o teste em modo interativo (UI).     
Ou, execute o NPM Script já criado `cy:open` para executar o teste em modo interativo (UI). 
