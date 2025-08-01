let secretFriends = [];


function validarEntrada(input) {
    return input == ''? false : true;
}

function limparCampo(campo) {
    campo.value = '';
}

function adicionarAmigo() {
    let inputContent = document.getElementById('amigo');
    if(validarEntrada(inputContent.value)) {
        secretFriends.push(inputContent.value);
        limparCampo(inputContent);
        // só atualiza o DOM se um novo nome for adicionado à lista
        listarAmigos();
    }
    else
        window.alert("Por favor, insira um nome.");
}

function listarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    let elementoListaAmigos = '';
    secretFriends.forEach(amigo => {
        elementoListaAmigos += `<li>${amigo}</li>`;
    });
    // dessa forma o DOM é manipulado uma única vez
    listaAmigos.innerHTML = elementoListaAmigos;
}

function gerarNumeroAleatorio() {
    // o numero deve estar entre 0 e secretFriends.length - 1 (índices válidos)
    return Math.floor(Math.random() * secretFriends.length);
}

function sortearAmigo() {
    let result = document.getElementById('resultado');
    result.innerHTML = secretFriends.length > 0 ? `<li>O amigo secreto sorteado é:${secretFriends[gerarNumeroAleatorio()]}</li>`
                                                : '';
}
