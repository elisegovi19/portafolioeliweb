function agregarComentario() {
    const nombre = document.getElementById("nombre").value.trim();
    const comentario = document.getElementById("comentario").value.trim();

    if (nombre === "" || comentario === "") {
        alert("Por favor llena ambos campos.");
        return;
    }

    const nuevoComentario = {
        nombre: nombre,
        texto: comentario,
        fecha: new Date().toLocaleString()
    };

    // Obtener comentarios existentes
    let comentarios = JSON.parse(localStorage.getItem("comentariosCafe")) || [];

    // Agregar el nuevo
    comentarios.push(nuevoComentario);

    // Guardar de nuevo
    localStorage.setItem("comentariosCafe", JSON.stringify(comentarios));

    // Limpiar campos
    document.getElementById("nombre").value = "";
    document.getElementById("comentario").value = "";

    // Actualizar vista
    mostrarComentarios();
}

function mostrarComentarios() {
    const contenedor = document.getElementById("listaComentarios");
    contenedor.innerHTML = ""; // Limpiar antes de volver a mostrar

    const comentarios = JSON.parse(localStorage.getItem("comentariosCafe")) || [];

    comentarios.forEach(c => {
        const div = document.createElement("div");
        div.classList.add("comentario");
        div.innerHTML = `<strong>${c.nombre}</strong> <br><small>${c.fecha}</small><p>${c.texto}</p>`;
        contenedor.appendChild(div);
    });
}

// Mostrar comentarios al cargar la página
document.addEventListener("DOMContentLoaded", mostrarComentarios);


