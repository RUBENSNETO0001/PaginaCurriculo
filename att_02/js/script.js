
function entrar(){
    let chavedeEntrada = document.getElementById("emailNome").value;
    let senha = document.getElementById("senha").value;
    
    if(chavedeEntrada == "" || senha == ""){
        alert("Porfavor verifique se colocou algum no login");
    }
    else{
        window.location = "../att_01/index.html";
    }

}