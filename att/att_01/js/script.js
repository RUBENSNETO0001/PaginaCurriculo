const modal = document.querySelector("#modalTodo");
const btn = document.querySelector("#modal_01");
const span = document.querySelectorAll(".fechar")[0];

//ele vai pega a variavel "btn", mais o onclick para quando o butao inicio for clicado ele vai abrir a função e dentro da função vai possui o modal, mais style, mais display indicando um bloco;
// abri modal
btn.addEventListener("click", () =>{
    modal.style.display = "block";
})

// aqui vamos abri uma janela. com um evento na função e se caso for verdadeiro o evento ser clicado fora da janela ou fora do modal a mesma ira fechar.
window.onclick = function(evento){
    if(evento.target == modal){
        modal.style.display = "none"
    }
}