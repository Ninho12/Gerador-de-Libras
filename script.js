/*
    Este arquivo é para fazer a magica
    da geração de frases em libras

    (Libras é a linguagem dos surdos)
*/


function gerarFrase(){
    // Pegar o elemento de entrada pelo ID
    const campoFrase = document.getElementById("minhaFrase")

    // Pegar o valor do campo de entrada
    var valorDoCampo = campoFrase.value;

    // Crio a variavel resposta
    // que vai ser uma variavel string com codigo html
    var resposta = "";

    // Transforma todas as letras em minusculas
    valorDoCampo = valorDoCampo.toLowerCase();

    for (let i = 0; i < valorDoCampo.length; i++) {
        var letra = valorDoCampo[i]
    
        if(letra != " "){
            resposta += "<img src='images/"+ letra +".jpg'>";
        }else{
            resposta += "<img src='images/espaco.jpg' />"
        }
    
    }
    // Pega a div saida, que é responsavel pela resposta
    const saida = document.getElementById("saida")

    console.log(resposta)

    // Coloca a resposta na div saida
    saida.innerHTML = resposta

}