function onSubmit(){
    var nome = document.getElementsByTagName("input")[1];
    var telefone = document.getElementsByTagName("input")[2];
    var email = document.getElementsByTagName("input")[3];
    var rua = document.getElementsByTagName("input")[4];
    var bairro = document.getElementsByTagName("input")[5];
    var cidade = document.getElementsByTagName("input")[6];
    var cep = document.getElementsByTagName("input")[7];
    var limite_credito = document.getElementsByTagName("input")[8];
    

    if(nome.value === ""){
        alert("Informe nome");
        nome.focus();
        return;
    }
    
    document.getElementsByTagName("form")[1].submit();
    document.getElementsByTagName("form")[2].submit();
    document.getElementsByTagName("form")[3].submit();
    document.getElementsByTagName("form")[4].submit();
    document.getElementsByTagName("form")[5].submit();
    document.getElementsByTagName("form")[6].submit();
    document.getElementsByTagName("form")[7].submit();
    document.getElementsByTagName("form")[8].submit();
}