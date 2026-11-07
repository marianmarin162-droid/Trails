/*UBICAR ELEMENTOS PARA UBICAR LA MODAL*/
const modal = document.getElementById("modalPerfil");
const cerrar = document.getElementById("cerrarModal");
const cards = document.querySelectorAll(".cardEquipo");
/*ELEMENTOS DENTRO DE LA MODAL */
const modalNombre = document.getElementById("modalNombre");
const modalCargo = document.getElementById("modalCargo");
const modalImagen = document.getElementById("modalImagen");
const modalDescripcion = document.getElementById("modalDescripcion");
/*ABRI LA MODAL Y OBTENER LOS VALORES PARA PONER EN LA MDOAL */
cards.forEach(card => {
    card.addEventListener("click", () => {
        const nombre = card.dataset.nombre;
        const cargo = card.dataset.cargo;
        const imagen = card.dataset.imagen;
        const descripcion = card.dataset.descripcion;
        /*SE CARGA LA INFROMACION*/
        modalNombre.textContent = nombre;
        modalCargo.textContent = cargo;
        modalImagen.src = imagen;
        modalImagen.alt = nombre;
        modalDescripcion.textContent = descripcion;
        /*SE MUESTRA LA MODAL*/
        modal.classList.add("active");
    });
});
/*CERRAR LA VENTANA MODAL */
cerrar.addEventListener("click", () => {
    modal.classList.remove("active");
});
/*PARA QUE SE CIERRE SI DOPY CLICK AFUERA DE LA MODAL */
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});
