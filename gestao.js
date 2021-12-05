
var linhaSelecionada = null

function onFormSubmit() { //ao licar no cadastrar vai rodar as funcoes abaixo//
var dadosform = lerDadosForm();
if (linhaSelecionada == null)
inserirNovo(dadosform);
else atualizar(dadosform);
apagarForm();
}

function lerDadosForm() { //funcao para pegar o que foi escrito no input do html pelo id//
    var dadosform = {};
    dadosform["codigoid"] = document.getElementById("codigoid").value;
    dadosform["produto"] = document.getElementById("produto").value;
    dadosform["descricao"] = document.getElementById("descricao").value;
    dadosform["cor"] = document.getElementById("cor").value;
    dadosform["valor"] = document.getElementById("valor").value;
    return dadosform;
}

function inserirNovo(data) { //funcao para inserir uma linha nova na tag 'tbody'do html//
    var table = document.getElementById("estoque").getElementsByTagName('tbody')[0];
    var novaLinha = table.insertRow(table.length);
    linha1 = novaLinha.insertCell(0); // criar nova linha //
    linha1.innerHTML = data.codigoid; // colocar o que foi escrito no input do 'codigo id' nessa nova linha //

    linha2 = novaLinha.insertCell(1);
    linha2.innerHTML = data.produto;

    linha3 = novaLinha.insertCell(2);
    linha3.innerHTML = data.descricao;

    linha4 = novaLinha.insertCell(3);
    linha4.innerHTML = data.cor;

    linha5 = novaLinha.insertCell(4);
    linha5.innerHTML = data.valor;

    linha6 = novaLinha.insertCell(5);
    linha6.innerHTML = '<a onClick="aoEditar(this)">Editar</a> <a onClick="aoDeletar(this)">Excluir</a>'; // "botao" de editar e excluir //

}

function apagarForm(){ //funcao para depois de colocar o texto do input em nova linha apagar o texto do form//
document.getElementById("codigoid").value = "";
document.getElementById("produto").value = "";
document.getElementById("descricao").value = "";
document.getElementById("cor").value = "";
document.getElementById("valor").value = "";
linhaSelecionada = null; 

}

function aoEditar(td){ //funcao para voltar os textos para o formulario//
    linhaSelecionada = td.parentElement.parentElement;
    document.getElementById("codigoid").value = linhaSelecionada.cells[0].innerHTML;
    document.getElementById("produto").value = linhaSelecionada.cells[1].innerHTML;
    document.getElementById("descricao").value = linhaSelecionada.cells[2].innerHTML;
    document.getElementById("cor").value = linhaSelecionada.cells[3].innerHTML;
    document.getElementById("valor").value = linhaSelecionada.cells[4].innerHTML;
}

function atualizar(dadosform) { //funcao para editar/atualizar o texto do formulario//
    linhaSelecionada.cells[0].innerHTML = dadosform.codigoid;
    linhaSelecionada.cells[1].innerHTML = dadosform.produto;
    linhaSelecionada.cells[2].innerHTML = dadosform.descricao;
    linhaSelecionada.cells[3].innerHTML = dadosform.cor;
    linhaSelecionada.cells[4].innerHTML = dadosform.valor;
}

function aoDeletar(td) { //funco para apagar a linha da tabela//
    linha = td.parentElement.parentElement;
    document.getElementById("estoque").deleteRow(linha.rowIndex);
    apagarForm();
}