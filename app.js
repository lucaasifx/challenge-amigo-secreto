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
    }
    else
        window.alert("Por favor, insira um nome.");
}