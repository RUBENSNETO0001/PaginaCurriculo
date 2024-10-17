const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn, index) => {
    const modal = document.querySelector(`#modal${index}`);
    const span = document.querySelectorAll(".fechar")[index];
    btn.addEventListener("click", () => {
        modal.style.display = "block";
    }
    )
    span.addEventListener("click", () => {
        modal.style.display = "none";

    })
    // window.onclick = function (evento) {
    //     if (evento.target == modal) {
    //         modal.style.display = "none"
    //     }
    // }
});
