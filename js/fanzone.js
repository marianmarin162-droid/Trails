/*TABS DE LA FAN ZONE */
//! Seleccionar todos los botones
const tabs = document.querySelectorAll('.tab');
//! Seleccionar todos los días
const dias = document.querySelectorAll('.dia-concierto');
//! Recorrer los botones
tabs.forEach(tab => {
    tab.addEventListener('click', function () {
        //! Quitar la clase activo de todos los botones
        tabs.forEach(btn => btn.classList.remove('activo'));
        //! Quitar la clase activo de todos los días
        dias.forEach(dia => dia.classList.remove('activo'));
        //! Activar el botón seleccionado
        this.classList.add('activo');
        //! Obtener el día seleccionado
        const diaSeleccionado = this.dataset.dia;
        //! Mostrar el contenido del día
        document.getElementById(diaSeleccionado).classList.add('activo');
    });
});
/*MARCAS */
const marcas = [
    {
        nombre: "SPECIALIZED",
        imagen: "img/marca1.png",
        descripcion: "Specialized destaca por su innovación en el ciclismo, desarrollando tecnologías como la suspensión inteligente Brain y Future Shock, diseñadas para mejorar la comodidad y el control.",
        enlace: "https://www.specialized.com/"
    },

    {
        nombre: "Uniforme Suarez",
        imagen: "img/marca2.png",
        descripcion: "El uniforme de ciclismo mostrado en la imagen corresponde al Jersey y Licra de Ciclismo Edición Especial Costa Rica de la marca Suárez  (línea Performance). Está inspirado en los colores de la bandera costarricense (blanco, azul y rojo)",
        enlace: "https://co.suarezclothing.com/"
    },

    {
        nombre: "BiKESTATION",
        imagen: "img/marca3.png",
        descripcion: "Todo tipo de seguridad que necesites para rodar, podrás encontrarlo en algún bikestation de nuestro evento podes encontrar productos para: ruta, montaña, bmx, downhill",
        enlace: "https://www.bikestation.co.cr/"
    }
];
// ELEMENTOS HTML
const imagenMarca = document.getElementById("imagenMarca");
const nombreMarca = document.getElementById("nombreMarca");
const descripcionMarca = document.getElementById("descripcionMarca");
const enlaceMarca = document.getElementById("enlaceMarca");

const anteriorMarca = document.getElementById("anteriorMarca");
const siguienteMarca = document.getElementById("siguienteMarca");
// POSICIÓN ACTUAL
let indiceMarca = 0;
// MOSTRAR MARCA
function mostrarMarca() {
    const marca = marcas[indiceMarca];
    imagenMarca.src = marca.imagen;
    imagenMarca.alt = "Bicicletas de la marca " + marca.nombre;
    nombreMarca.textContent = marca.nombre;
    descripcionMarca.textContent = marca.descripcion;
    enlaceMarca.href = marca.enlace;
}
// FLECHA DERECHA
siguienteMarca.addEventListener("click", () => {
    indiceMarca++;
    if (indiceMarca >= marcas.length) {
        indiceMarca = 0;
    }
    mostrarMarca();
});
// FLECHA IZQUIERDA
anteriorMarca.addEventListener("click", () => {
    indiceMarca--;
    if (indiceMarca < 0) {
        indiceMarca = marcas.length - 1;
    }
    mostrarMarca();
});
/* Autografos*/
const invitados = [

    // JUEVES
    {
        dia: "VIERNES 27/12",
        participantes: [
            "Martín Vidaurre",
            "Nino Schurter",
            "Andrey Amador",
            "Jenny Rissveds",
            "Tom Pidcock"
        ]
    },

    // VIERNES
    {
        dia: "SÁBADO 28/12",
        participantes: [
            "Andrey Fonseca",
            "Samara Maxwell",
            "Pauline Ferrand",
            "Paolo Montoya",
            "Puck Pieterse"
        ]
    },

    // SÁBADO
    {
        dia: "DOMINGO 29/12",
        participantes: [
            "Jolanda Neff",
            "Lico Ramírez",
            "Christopher Blevins",
            "Kike Artavia",
            "Cristel Espinoza"
        ]
    }

];
const listaDeportistas = document.getElementById("deportistasLista");
const dia = document.getElementById("dia");
const anterior = document.getElementById("anteriorDeportista");
const siguiente = document.getElementById("siguienteDeportista");
let diaActual = 0;
// MOSTRAR PARTICIPANTES
function mostrarInvitados() {
    listaDeportistas.innerHTML = "";
    // MOSTRAR FECHA
    dia.textContent = invitados[diaActual].dia;
    // MOSTRAR CARDS
    invitados[diaActual].participantes.forEach(nombre => {
        const card = document.createElement("div");
        card.classList.add("deportista");
        card.innerHTML = `
            <h3>${nombre}</h3>
        `;
        listaDeportistas.appendChild(card);
    });
    // CONTROLAR FLECHAS
    anterior.disabled = diaActual === 0;
    siguiente.disabled = diaActual === invitados.length - 1;
}
// DÍA ANTERIOR
anterior.addEventListener("click", () => {
    if (diaActual > 0) {
        diaActual--;
        mostrarInvitados();
    }
});
// DÍA SIGUIENTE
siguiente.addEventListener("click", () => {
    if (diaActual < invitados.length - 1) {
        diaActual++;
        mostrarInvitados();
    }
});
// INICIAR
mostrarInvitados();
/* 
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Autografos
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/

/*
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
AUTÓGRAFOS - CICLISTAS
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/

// DATOS DE LOS CICLISTAS
const ciclistas = [
    {
        dia: "NACIONALES",
        ciclistas: [
            {
                id: 1,
                nombre: "Lico Ramírez",
                sigla: "CR",
                imagenCiclista: "img/LICO RAMIREZ.jpg",
                imagenBandera: "img/CR.jpg"
            },
            {
                id: 2,
                nombre: "Andrey Amador",
                sigla: "CR",
                imagenCiclista: "img/ANDREY.jpg",
                imagenBandera: "img/CR.jpg"
            },
            {
                id: 3,
                nombre: "Andrey Fonseca",
                sigla: "CR",
                imagenCiclista: "img/ANDREY FONSECA.jpg",
                imagenBandera: "img/CR.jpg"
            },
            {
                id: 4,
                nombre: "Paolo Montoya",
                sigla: "CR",
                imagenCiclista: "img/PAOLO MONTOYA.jpg",
                imagenBandera: "img/CR.jpg"
            },
            {
                id: 5,
                nombre: "Cristel Espinoza",
                sigla: "CR",
                imagenCiclista: "img/CRISTEL ESPINOZA.jpg",
                imagenBandera: "img/CR.jpg"
            },
            {
                id: 6,
                nombre: "Kike Artavia",
                sigla: "CR",
                imagenCiclista: "img/KIKE ARTAVIA.jpg",
                imagenBandera: "img/CR.jpg"
            }
        ]
    },
    {
        dia: "INTERNACIONALES",
        ciclistas: [
            {
                id: 7,
                nombre: "Nino Schurter",
                sigla: "CH",
                imagenCiclista: "img/NINO SCHURTER.jpg",
                imagenBandera: "img/CH.jpg"
            },
            {
                id: 8,
                nombre: "Pauline Ferrand",
                sigla: "FR",
                imagenCiclista: "img/PAULINE FERRAND.jpg",
                imagenBandera: "img/FR.jpg"
            },
            {
                id: 9,
                nombre: "Tom Pidcock",
                sigla: "UK",
                imagenCiclista: "img/TOM PIDCOCK.jpg",
                imagenBandera: "img/UK.jpg"
            },
            {
                id: 10,
                nombre: "Jolanda Neff",
                sigla: "CH",
                imagenCiclista: "img/JOLANDA NEFF.jpg",
                imagenBandera: "img/CH.jpg"
            },
            {
                id: 11,
                nombre: "Martín Vidaurre",
                sigla: "CL",
                imagenCiclista: "img/MARTIN VIDAURRE.jpg",
                imagenBandera: "img/CL.jpg"
            },
            {
                id: 12,
                nombre: "Jenny Rissveds",
                sigla: "SE",
                imagenCiclista: "img/JENNY RISSVEDS.jpg",
                imagenBandera: "img/SE.jpg"
            }
        ]
    }
];


// ELEMENTOS DEL HTML
// ELEMENTOS DEL HTML
const contenedorDeportistas = document.getElementById("contenedorDeportistas");
const tabsDeportistas = document.querySelectorAll(".tab-deportista");

// GRUPO ACTUAL
let grupoActual = 0;


// MOSTRAR CICLISTAS
function mostrarDeportistas() {

    const grupo = ciclistas[grupoActual];

    contenedorDeportistas.innerHTML = grupo.ciclistas.map(deportista => {

        return `
            <div class="carddeportista">

                <img
                    class="fotodeportista"
                    src="${deportista.imagenCiclista}"
                    alt="${deportista.nombre}"
                >

                <div class="infodeportista">

                    <h4 class="nombreC">
                        ${deportista.nombre}
                    </h4>

                    <div class="pais-deportista">

                        <img
                            class="bandera"
                            src="${deportista.imagenBandera}"
                            alt="${deportista.sigla}"
                        >

                        <span class="sigla">
                            ${deportista.sigla}
                        </span>

                    </div>

                </div>

            </div>
        `;

    }).join("");

    actualizarTabs();
}


// ACTUALIZAR TABS
function actualizarTabs() {

    tabsDeportistas.forEach(tab => {

        const grupo = Number(tab.dataset.grupo);

        tab.classList.toggle("activo", grupo === grupoActual);

    });

}


// EVENTOS DE LOS TABS
tabsDeportistas.forEach(tab => {

    tab.addEventListener("click", () => {

        grupoActual = Number(tab.dataset.grupo);

        mostrarDeportistas();

    });

});


// INICIAR
mostrarDeportistas();