# Qa-Automacao-Cypress
🚀 Automação de Testes de Login - Cypress
Este projeto faz parte da minha jornada de aprendizado em QA Automation. Nele, desenvolvi suítes de testes para validar o fluxo de autenticação de uma plataforma de e-commerce, focando em cenários de sucesso e exceção.

###🧠 O que eu aprendi neste projeto
Durante o desenvolvimento destes testes, enfrentei desafios reais que me ajudaram a consolidar conceitos fundamentais:

##1. Resiliência de Seletores e Asserts
Aprendi a diferença crucial entre as validações do Cypress:

have.text: Exige uma correspondência exata, o que me ensinou que o HTML muitas vezes contém espaços invisíveis que podem quebrar um teste.

include.text / contain: Aprendi a usar essas asserções para criar testes mais robustos e resilientes a pequenas variações de layout ou espaços em branco no código.

##2. Identificação de Elementos (Locators)
Pratiquei a busca de elementos utilizando diferentes estratégias, como IDs para elementos únicos (ex: #swal2-title) e classes CSS para mensagens de validação de campo (ex: .invalid_input).

##3. Gerenciamento de Estado entre Testes
Entendi como o Cypress isola os testes, limpando cookies e estados a cada bloco it, garantindo que um teste não influencie o resultado do próximo.

##4. Debugging com Cypress App
Utilizei o Time Travel e os logs de console para investigar falhas de asserção, entendendo por que um elemento que parecia correto visualmente apresentava erro de texto vazio no código.

###🛠️ Tecnologias Utilizadas
Cypress (Framework de testes E2E)

JavaScript (Linguagem de programação)

Node.js

🧪 Cenários Testados
[x] Login com sucesso (fluxo feliz).

[x] Validação de senha incorreta.

[x] Validação de e-mail inválido.

[x] Tratamento de campos vazios (Login e Senha).
