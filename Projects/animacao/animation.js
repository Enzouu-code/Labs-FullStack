// Canvas
let canvas = document.getElementById("tela");
let ctx = canvas.getContext("2d");

// Imagem
let imagem = new Image();
imagem.src = "bola.webp";

// Posição inicial
let x = 150;
let y = 150;

// Tamanho da imagem
let tamanho = 50;

// Movimento do mouse
canvas.addEventListener("mousemove", function(evento) {

    let rect = canvas.getBoundingClientRect();

    // Centraliza o mouse na imagem
    x = evento.clientX - rect.left - tamanho / 2;
    y = evento.clientY - rect.top - tamanho / 2;

    // Impede sair do canvas

    // esquerda
    if (x < 0) {
        x = 0;
    }

    // direita
    if (x > canvas.width - tamanho) {
        x = canvas.width - tamanho;
    }

    // cima
    if (y < 0) {
        y = 0;
    }

    // baixo
    if (y > canvas.height - tamanho) {
        y = canvas.height - tamanho;
    }
});

// Função animação
function desenhar() {

    // Limpa tela
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenha imagem
    ctx.drawImage(imagem, x, y, tamanho, tamanho);

    requestAnimationFrame(desenhar);
}

// Inicia
imagem.onload = function() {
    desenhar();
};