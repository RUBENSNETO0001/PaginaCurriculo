alert("Senha de acesso:\nCHAVE DE ENTRADA: user\nSENHA: 1234")
// usei uma função, que para amim e mais rapido ser executado
function entrar() {
    let chavedeEntrada = document.getElementById("emailNome").value;
    let senha = document.getElementById("senha").value;

        if (chavedeEntrada === "user" && senha === "1234") {
            window.location.href = "../att_01/index.html";
        }
        else if(chavedeEntrada == "" || senha == ""){
            alert("Verifique os campos não estão vazios");
        }
        else {
            // caso o cara erre a senha. como não ta conectado a um banco de dados so tem uma senha possivel para acessar  o site.
            alert("Porfavor verifique se colocou algum no campos do login!!");
        }
    
}