async function cargarOfertas() {
    const contenedor = document.getElementById("lista-ofertas");

    try {
        // Solicitar las ofertas al servidor Express.
        const respuesta = await fetch("/api/ofertas");

        if (!respuesta.ok) {
            throw new Error("No se pudieron consultar las ofertas");
        }

        // Convertir la respuesta JSON a objetos JavaScript.
        const ofertas = await respuesta.json();

        // Limpiar el contenido anterior.
        contenedor.innerHTML = "";

        // Crear una tarjeta HTML por cada oferta.
        ofertas.forEach((oferta) => {
            const tarjeta = document.createElement("article");

            const titulo = document.createElement("h3");
            titulo.textContent = oferta.puesto;

            const clinica = document.createElement("p");
            clinica.textContent = `${oferta.clinica} - ${oferta.ciudad}`;

            const horario = document.createElement("p");
            horario.textContent = `Turno: ${oferta.horario}`;

            const distancia = document.createElement("p");
            distancia.textContent = `Distancia: ${oferta.distanciaKm} km`;

            tarjeta.append(titulo, clinica, horario, distancia);

            // Destacar las sustituciones urgentes.
            if (oferta.urgente) {
                const aviso = document.createElement("p");
                aviso.className = "urgente";
                aviso.textContent = "Oferta urgente";

                tarjeta.appendChild(aviso);
            }

            contenedor.appendChild(tarjeta);
        });

    } catch (error) {
        contenedor.textContent = "No se han podido cargar las ofertas.";
        console.error(error);
    }
}

// Ejecutar la función al cargar la página.
cargarOfertas();
