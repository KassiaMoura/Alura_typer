var frase = $(".frase").text(); 
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao");
campo.on("input", function() {
var conteudo = campo.val();

var qtdPalavras = conteudo.split(/\S+/).length;
 $("#contador-palavras").text(qtdPalavras);

var qtdCaracteres = conteudo.length;
$("#contador-caracteres").text(qtdCaracteres);

});

var tempoRestante = $("#tempo-digitacao").text();
campo.on("focus", function() {
    setInterval(function() {
        tempoRestante--;
        console.log(tempoRestante);
    }, 1000);
});
