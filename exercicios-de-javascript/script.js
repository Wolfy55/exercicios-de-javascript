//---------------------------------------//
// 01 - Verificador de Idade              //
//---------------------------------------//
function verificarIdade() {
    const idade = Number(document.getElementById("idade").value);
    const resultadoIdade = document.getElementById("resultado-idade");

    resultadoIdade.classList.remove("sucesso", "erro", "aviso");

    if (idade < 0) {
        resultadoIdade.textContent = "Não nascido ainda!";
        resultadoIdade.classList.add("mostrar", "aviso");
    } else if (idade >= 18) {
        resultadoIdade.textContent = "Maior de idade.";
        resultadoIdade.classList.add("mostrar", "sucesso");
    } else {
        resultadoIdade.textContent = "Menor de idade.";
        resultadoIdade.classList.add("mostrar", "erro");
    }
}

//---------------------------------------//
// 02 - Número Positivo, Negativo ou Zero //
//---------------------------------------//
function verificarNumero() {
    const numero = Number(document.getElementById("numero").value);
    const resultadoNumero = document.getElementById("resultado-numero");

    resultadoNumero.classList.remove("positivo", "negativo", "zero");

    if (numero > 0) {
        resultadoNumero.textContent = "O número é positivo.";
        resultadoNumero.classList.add("mostrar", "positivo");
    } else if (numero < 0) {
        resultadoNumero.textContent = "O número é negativo.";
        resultadoNumero.classList.add("mostrar", "negativo");
    } else {
        resultadoNumero.textContent = "O número é igual a zero.";
        resultadoNumero.classList.add("mostrar", "zero");
    }
}

//---------------------------------------//
// 03 - Aprovação do Aluno                //
//---------------------------------------//
function verificarNota() {
    const nota = Number(document.getElementById("nota").value);
    const resultadoNota = document.getElementById("resultado-nota");

    resultadoNota.classList.remove("aprovado", "recuperacao", "reprovado");

    if (nota >= 7) {
        resultadoNota.textContent = "Aprovado";
        resultadoNota.classList.add("mostrar", "aprovado");
    } else if (nota >= 5) {
        resultadoNota.textContent = "Recuperação";
        resultadoNota.classList.add("mostrar", "recuperacao");
    } else {
        resultadoNota.textContent = "Reprovado";
        resultadoNota.classList.add("mostrar", "reprovado");
    }
}

//---------------------------------------//
// 04 - Sistema de Prioridade             //
//---------------------------------------//
function verificarPrioridade() {
    const prioridade = document.getElementById("prioridade").value;
    const resultadoPrioridade = document.getElementById("resultado-prioridade");

    resultadoPrioridade.classList.remove("urgente", "alta", "media", "baixa", "desconhecida");

    switch (prioridade) {
        case "urgente":
            resultadoPrioridade.textContent = "Atenção redobrada!";
            resultadoPrioridade.classList.add("mostrar", "urgente");
            break;
        case "alta":
            resultadoPrioridade.textContent = "Prioridade alta.";
            resultadoPrioridade.classList.add("mostrar", "alta");
            break;
        case "media":
            resultadoPrioridade.textContent = "Prioridade média.";
            resultadoPrioridade.classList.add("mostrar", "media");
            break;
        case "baixa":
            resultadoPrioridade.textContent = "Prioridade baixa.";
            resultadoPrioridade.classList.add("mostrar", "baixa");
            break;
        default:
            resultadoPrioridade.textContent = "Prioridade desconhecida.";
            resultadoPrioridade.classList.add("mostrar", "desconhecida");
    }
}

//---------------------------------------//
// 05 - Tarefa Atrasada                   //
//---------------------------------------//
function verificarTarefa() {
    const prioridade = document.getElementById("prioridade-tarefa").value;
    const atrasada = document.getElementById("atrasada").checked;
    const resultadoTarefa = document.getElementById("resultado-tarefa");

    resultadoTarefa.classList.remove("alerta", "calmo");

    if (prioridade === "urgente" || (prioridade === "alta" && atrasada)) {
        resultadoTarefa.textContent = "Precisa de atenção agora!";
        resultadoTarefa.classList.add("mostrar", "alerta");
    } else {
        resultadoTarefa.textContent = "Pode aguardar.";
        resultadoTarefa.classList.add("mostrar", "calmo");
    }
}

//---------------------------------------//
// 06 - Sistema de Login                  //
//---------------------------------------//
function verificarLogin(){
    const resultadoLogin = document.getElementById("resultado-login");
    const usuarioDigitado = document.getElementById("usuario").value;
    const senhaDigitada = document.getElementById("senha").value;
    const usuario = "admin";
    const senha = "1234";

    resultadoLogin.classList.remove("sucesso", "alerta", "aviso");

    if(usuarioDigitado === usuario && senhaDigitada === senha){
        resultadoLogin.textContent = "Login realizado com sucesso!";
        resultadoLogin.classList.add("mostrar", "sucesso")
    }
    else if(usuarioDigitado === usuario && senhaDigitada !== senha){
        resultadoLogin.textContent = "Senha incorreta.";
        resultadoLogin.classList.add("mostrar", "aviso");
    }
    else{
        resultadoLogin.textContent = "Usuário não encontrado.";
        resultadoLogin.classList.add("mostrar", "erro");
    }
};

//---------------------------------------//
// 07 - Ternário                          //
//---------------------------------------//
function verificarTernario(){
    const idadeTernario = document.getElementById("idade-ternario");
    const resultadoTernario = document.getElementById("resultado-ternario")
    const idade = Number(document.getElementById("idade-ternario").value);

    const situacao = idade >= 18 ? "Maior de idade" : "Menor de idade"
    resultadoTernario.classList.remove("sucesso", "erro");
    resultadoTernario.textContent = situacao;
    resultadoTernario.classList.add("mostrar", idade >=18 ? "sucesso" : "erro");
}
