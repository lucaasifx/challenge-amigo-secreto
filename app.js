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