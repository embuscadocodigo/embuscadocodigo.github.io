var imagens =["css/img/004.gif", "css/img/011.png", "css/img/012.png", "css/img/013.png", "css/img/014.png"];
var imagemAtual = 0;

function trocaImagem() {
imagemAtual = (imagemAtual + 1 ) % 5;
document.querySelector('.gif img').src = imagens[imagemAtual];
}

setInterval(trocaImagem, 1500);