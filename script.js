function validarFormulario() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;
    const msg = document.getElementById("mensagem");

    // Desafio: Mensagens diferentes para cada tipo de erro
    if (nome === "") {
        msg.textContent = "⚠ O campo Nome é obrigatório!";
        msg.style.color = "red";
    } else if (!email.includes("@")) {
        msg.textContent = "⚠ Formato de e-mail incorreto!";
        msg.style.color = "red";
    } else if (idade === "" || idade <= 0) {
        msg.textContent = "⚠ Digite uma idade válida!";
        msg.style.color = "red";
    } else {
        msg.textContent = "✅ Formulário enviado com sucesso!";
        msg.style.color = "green";
    }
}

function multiplicar(a, b) {
    return a * b;
}

function realizarTestes() {
    try {
        console.assert(multiplicar(2, 5) === 10, "Erro: 2 * 5 deveria ser 10");
        console.assert(multiplicar(10, 0) === 0, "Erro: Qualquer número por 0 deve ser 0");
        console.assert(multiplicar(-2, 3) === -6, "Erro: Multiplicação com negativos falhou");
        
        console.log("✅ Todos os testes de multiplicação passaram!");
    } catch (error) {
        console.error("Um ou mais testes falharam.");
    }
}

realizarTestes();