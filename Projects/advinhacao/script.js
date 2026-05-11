// Gera o número aleatório UMA VEZ
let numeroAleatorio = Math.floor(Math.random() * 101);

function verificarNumero() {

    // Número digitado pelo usuário
    let numeroUsuario =
        parseInt(document.getElementById("numero").value);

    let resultado =
        document.getElementById("resultado");

    let container =
        document.getElementById("container");

    // Verificação com IF
    if (numeroUsuario == numeroAleatorio) {

        resultado.innerHTML =
            "Parabéns! Você acertou!";

        // Verde quando acertar
        container.style.setProperty("background-color", "green");

    } else if (numeroUsuario > numeroAleatorio) {

        resultado.innerHTML =
            "O número digitado é MAIOR.";

        // Vermelho quando errar
        container.style.setProperty("background-color", "red");

    } else {

        resultado.innerHTML =
            "O número digitado é MENOR.";

        // Vermelho quando errar
        container.style.setProperty("background-color", "red");
    }
}