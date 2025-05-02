document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("formReservacion").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const personas = document.getElementById("personas").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("Confirmación de Reservación", 105, 20, null, null, "center");

    // linea 
    doc.setDrawColor(0, 0, 0);
    doc.line(20, 25, 190, 25);

    // información de la reservación
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Restaurante: ConSentido Café`, 20, 40);
    doc.text(`Nombre: ${nombre}`, 20, 50);
    doc.text(`Teléfono: ${telefono}`, 20, 60);
    doc.text(`Personas: ${personas}`, 20, 70);
    doc.text(`Fecha: ${fecha}`, 20, 80);
    doc.text(`Hora: ${hora}`, 20, 90);

    // linea
    doc.line(20, 100, 190, 100);

    doc.setFont("helvetica", "italic");
    doc.setFontSize(11);
    doc.text("¡Gracias por tu reservación! Te esperamos con gusto.", 105, 110, null, null, "center");

    doc.setFontSize(10);
    doc.setFont("courier", "normal");
    doc.text("ConSentido Café - Av. Nicolas Zapata 1505, SLP", 105, 280, null, null, "center");

    doc.save("Reservacion_ConSentido Café.pdf");
  });
});