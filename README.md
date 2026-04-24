# 🧪 Projeto: Qualidade e Tipos de Teste de Software

Este projeto foi desenvolvido como uma atividade prática para demonstrar a aplicação de diferentes tipos de testes de software num ambiente web simples (HTML, CSS e JavaScript).

## 🚀 Objetivo
O objetivo é validar a qualidade de um sistema através de:
- **Testes de Unidade:** Verificação de funções isoladas.
- **Testes Funcionais:** Validação das regras de negócio do formulário.
- **Teste de Interface (UI):** Avaliação do comportamento visual e interatividade.

## 🛠️ Tecnologias Utilizadas
- **HTML5**: Estrutura do formulário.
- **CSS3**: Estilização e efeitos de transição (UI).
- **JavaScript**: Lógica de validação e execução de testes automatizados.

## 📋 Tipos de Testes Implementados

### 1. Teste de Unidade (Unit Test)
Foi criada uma função de multiplicação no ficheiro `script.js`. O teste é executado automaticamente através do método `console.assert()`, que verifica se a função retorna os valores esperados para diferentes cenários.
> **Como verificar:** Abra o Console do Navegador (F12).

### 2. Teste Funcional
O formulário possui validações específicas para garantir que os dados inseridos são válidos:
- **Nome:** Não pode estar vazio.
- **E-mail:** Deve conter o caractere `@`.
- **Idade:** Deve ser um número maior que zero.
- **Feedback:** Mensagens personalizadas em verde (sucesso) ou vermelho (erro).

### 3. Teste de Interface (UI)
Foi aplicado um efeito de *hover* no botão de envio.
- **Comportamento:** Ao passar o rato, o botão muda de cor e aumenta levemente de tamanho de forma suave (`transition`).

## 💻 Como Executar o Projeto

1. Faça o download ou clone este repositório:
   ```bash
   git clone [https://github.com/teu-usuario/nome-do-repositorio.git](https://github.com/teu-usuario/nome-do-repositorio.git)
