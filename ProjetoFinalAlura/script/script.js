const criptas = ["enter", "imes", "ai", "ober", "ufat"];
const chaves = ["e", "i", "a", "o", "u"]


function criptografar() {
    let criptografa = " ", chave, encontrado, elemento, cript;
    cript = document.getElementById("decodificador_texto").value;
        for (let letra = 0; letra < cript.length; letra++) {
            encontrado = false;
            for (chave in chaves) {
                if (cript.at(letra) == chaves[chave]) {
                    criptografa += criptas[chave];
                    encontrado = true;
                }
            }
            if (encontrado == false) {
                criptografa += cript.at(letra);
            }
        }
    elemento = document.getElementById("imagem_id");
        elemento.className = "imagem_removida";
    elemento = document.getElementById("copiar");
        elemento.className = "decodificador_mensagem_textos_copia";
    document.getElementById("decodificador_mensagem_mostrar").innerHTML = criptografa.toLowerCase();
}


function desCriptografar () {
    let elemento, deCript = document.getElementById("decodificador_texto").value;
        for(let letra = 0; letra < deCript.length; letra++) {
            if (deCript.search(criptas[0]) != null) {
                deCript = deCript.replaceAll(criptas[0], "e");
                letra += criptas[0].length;
            }
            if (deCript.search(criptas[1]) != null) {
                deCript = deCript.replaceAll(criptas[1], "i");
                letra += criptas[1].length;
            }
            if (deCript.search(criptas[2]) != null) {
                deCript = deCript.replaceAll(criptas[2], "a");
                letra += criptas[2].length;
            }
            if (deCript.search(criptas[3]) != null) {
                deCript = deCript.replaceAll(criptas[3], "o");
                letra += criptas[3].length;
            }
            if (deCript.search(criptas[4]) != null) {
                deCript = deCript.replaceAll(criptas[4], "u");
                letra += criptas[4].length;
            }
        }
    elemento = document.getElementById("imagem_id");
        elemento.className = "imagem_removida";
    elemento = document.getElementById("copiar");
        elemento.className = "decodificador_mensagem_textos_copia";
    document.getElementById("decodificador_mensagem_mostrar").innerHTML = deCript.toLowerCase();
}

function copiarTexto () {
    let copiar = document.getElementById("decodificador_mensagem_mostrar").innerHTML;
        document.getElementById("decodificador_texto").value = copiar;
}