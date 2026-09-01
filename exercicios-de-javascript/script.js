// 01 - Verificador de Idade
function verificarIdade() {
    const idade = Number(document.getElementById("idade").value);
    const resultado = document.getElementById("resultado-idade");

    resultado.classList.remove("sucesso", "erro", "aviso");

    if (idade < 0) {
        resultado.textContent = "Não nascido ainda!";
        resultado.classList.add("mostrar", "aviso");
    } else if (idade >= 18) {
        resultado.textContent = "Maior de idade.";
        resultado.classList.add("mostrar", "sucesso");
    } else {
        resultado.textContent = "Menor de idade.";
        resultado.classList.add("mostrar", "erro");
    }
}

// 02 - Número Positivo, Negativo ou Zero
function verificarNumero() {
    const numero = Number(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado-numero");

    resultado.classList.remove("positivo", "negativo", "zero");

    if (numero > 0) {
        resultado.textContent = "O número é positivo.";
        resultado.classList.add("mostrar", "positivo");
    } else if (numero < 0) {
        resultado.textContent = "O número é negativo.";
        resultado.classList.add("mostrar", "negativo");
    } else {
        resultado.textContent = "O número é igual a zero.";
        resultado.classList.add("mostrar", "zero");
    }
}

// 03 - Aprovação do Aluno
function verificarNota() {
    const nota = Number(document.getElementById("nota").value);
    const resultado = document.getElementById("resultado-nota");

    resultado.classList.remove("aprovado", "recuperacao", "reprovado");

    if (nota >= 7) {
        resultado.textContent = "Aprovado";
        resultado.classList.add("mostrar", "aprovado");
    } else if (nota >= 5) {
        resultado.textContent = "Recuperação";
        resultado.classList.add("mostrar", "recuperacao");
    } else {
        resultado.textContent = "Reprovado";
        resultado.classList.add("mostrar", "reprovado");
    }
}

// 04 - Sistema de Prioridade
function verificarPrioridade() {
    const prioridade = document.getElementById("prioridade").value;
    const resultado = document.getElementById("resultado-prioridade");

    resultado.classList.remove("urgente", "alta", "media", "baixa", "desconhecida");

    switch (prioridade) {
        case "urgente":
            resultado.textContent = "Atenção redobrada!";
            resultado.classList.add("mostrar", "urgente");
            break;
        case "alta":
            resultado.textContent = "Prioridade alta.";
            resultado.classList.add("mostrar", "alta");
            break;
        case "media":
            resultado.textContent = "Prioridade média.";
            resultado.classList.add("mostrar", "media");
            break;
        case "baixa":
            resultado.textContent = "Prioridade baixa.";
            resultado.classList.add("mostrar", "baixa");
            break;
        default:
            resultado.textContent = "Prioridade desconhecida.";
            resultado.classList.add("mostrar", "desconhecida");
    }
}

// 05 - Tarefa Atrasada
function verificarTarefa() {
    const prioridade = document.getElementById("prioridade-tarefa").value;
    const atrasada = document.getElementById("atrasada").checked;
    const resultado = document.getElementById("resultado-tarefa");

    resultado.classList.remove("alerta", "calmo");

    if (prioridade === "urgente" || (prioridade === "alta" && atrasada)) {
        resultado.textContent = "Precisa de atenção agora!";
        resultado.classList.add("mostrar", "alerta");
    } else {
        resultado.textContent = "Pode aguardar.";
        resultado.classList.add("mostrar", "calmo");
    }
}