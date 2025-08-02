class Amigo {
    constructor(nome, id) {
        this.nome = nome;
        this.id = id;
    }
};

let secretFriends = [];
let sorteados = [];
let id = 1;

function validarEntrada(input) {
    return input == ''? false : true;
}

function limparCampo(campo) {
    campo.value = '';
}

function adicionarAmigo() {
    let inputContent = document.getElementById('amigo');
    if(validarEntrada(inputContent.value)) {
        let novoAmigo = new Amigo(inputContent.value, id);
        //incrementa o id
        id++;
        secretFriends.push(novoAmigo);
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
        elementoListaAmigos += `<li>${amigo.nome}</li>`;
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
    // se todos já foram sorteados
    if(secretFriends.length == 0)
        result.innerHTML = '';
    else if(sorteados.length == secretFriends.length)
        result.innerHTML = 'Todos os amigos foram sorteados';
    else {
        while(true) {
            let foiSorteado = false;
            let amigoSorteado = secretFriends[gerarNumeroAleatorio()];
            sorteados.forEach(amigo => {
                if(amigo.nome == amigoSorteado.nome) {
                    if(amigo.id == amigoSorteado.id)
                        foiSorteado = true;
                }
            });
            if(!foiSorteado) {
                result.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSorteado.nome}</li>`
                sorteados.push(amigoSorteado);
                break;
            }
        }
    }
}
