// usei uma função, que para amim e mais rapido ser executado
function entrar(){
    let chavedeEntrada = document.getElementById("emailNome").value;
    let senha = document.getElementById("senha").value;
    
    if(chavedeEntrada == "" || senha == ""){
        alert("Porfavor verifique se colocou algum no login");
    }
    // botei umna chave padrao para entra no site, muito mais facil de entrar
    else if(chavedeEntrada == "user" || senha == "1234"){
         window.location = "../att_01/index.html";
    }
    else{
        // caso o cara erre a senha. como não ta conectado a um banco de dados so tem uma senha possivel para acessar  o site.
       alert("senha incorreta!!");
    }

}