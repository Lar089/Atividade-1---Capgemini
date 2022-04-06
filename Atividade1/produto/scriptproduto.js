function loadCategoria() {
    fetch("http://localhost:3000/categorias")
        .then(x => x.text())
        .then(cat => display(cat))
}

function display(dados) {
    let lista = JSON.parse(dados)
    var opt = ""
    for (let ob in lista) {
        opt += "<option var=" + lista[ob].id + ">" + lista[ob].descricao + "</option>"
    }
    document.getElementById("categoria").innerHTML = opt;
}

function onSubmit(){
    var descricao = document.getElementsByTagName("input")[0];
    var preco_unitario = document.getElementsByTagName("input")[1];
    var unidade_medida = document.getElementsByTagName("input")[2];
    var fornecedor = document.getElementsByTagName("input")[3];
    

    if(descricao.value === ""){
        alert("Informe descrição");
        descricao.focus();
        return;
    }

    if(preco_unitario.value === ""){
        alert("Informe preço unitario");
        preco_unitario.focus();
        return;
    }

    if(unidade_medida.value === ""){
        alert("Informe unidade medida");
        unidade_medida.focus();
        return;
    }

    if(fornecedor.value === ""){
        alert("Informe fornecedor");
        fornecedor.focus();
        return;
    }
    
    document.getElementsByTagName("form")[0].submit();
    document.getElementsByTagName("form")[1].submit();
    document.getElementsByTagName("form")[2].submit();
    document.getElementsByTagName("form")[3].submit();

    return alert("Gravado com Sucesso!")
}
function reset(){
    return alert("Cancelado")
}