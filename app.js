const formulario = document.querySelector(".border")
const opcion = document.querySelector("#opcion")
const boton = document.querySelector(".btn")
const loader = document.querySelector(".btn-secondary")
const toast = document.querySelector(".toast")


formulario.addEventListener("submit", e => {
    e.preventDefault();


    const data = new FormData(formulario);
    const [email, password] = [...data.values()];

    if(!email.trim() || !password.trim() || !opcion.checked) {
        const div = document.createElement("DIV");
        div.textContent = "Todos los campos son obligatorios".toUpperCase();
        div.classList.add("alert", "alert-success", "text-center", "mt-3")
        formulario.appendChild(div);
        setTimeout(() => {
            formulario.removeChild(div)
        }, 3000);
        return;
    }

    finaliciacion();

    formulario.reset();
})

const finaliciacion = () => {
    boton.classList.add("d-none");
    loader.classList.remove("d-none")
    loader.classList.add("w-100", "btn-lg")
    setTimeout(() => {
        loader.classList.add("d-none")
        boton.classList.remove("d-none")

        const evento = new bootstrap.Toast(toast);
        evento.show()
    }, 2000)
}
