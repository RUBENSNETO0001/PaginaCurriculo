// parte dos modais
const buttons = document.querySelectorAll(".btn");
const modal = document.querySelector("#modal");
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
});
