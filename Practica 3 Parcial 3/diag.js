let puntuaciones = [];

function calcularResultados() {
  puntuaciones = [];
  let total = 0;

  for (let i = 1; i <= 7; i++) {
    const radios = document.getElementsByName(`q${i}`);
    let respondida = false;

    for (const radio of radios) {
      if (radio.checked) {
        const puntos = parseInt(radio.value);
        puntuaciones.push(puntos);
        total += puntos;
        respondida = true;
        break;
      }
    }

    if (!respondida) {
      puntuaciones.push(0); // Si no se responde, se cuenta como 0
    }
  }

  document.getElementById("resultado").textContent = `Tu calificación es: ${total} / 7`;
  generarGrafica(puntuaciones);
}

function generarGrafica(puntos) {
  const ctx = document.getElementById("graficaResultados").getContext("2d");

  if (window.miGrafico) window.miGrafico.destroy();

  window.miGrafico = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7'
      ],
      datasets: [{
        label: 'Puntos',
        data: puntos,
        backgroundColor: '#ce93d8'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 1
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

function generarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const total = puntuaciones.reduce((a, b) => a + b, 0);

  doc.setFont("helvetica", "bold");
  doc.setTextColor(138, 43, 226); // Morado
  doc.setFontSize(20);
  doc.text("Resultados del Diagnóstico", 105, 20, null, null, "center");

  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text("Puntos obtenidos por pregunta:", 20, 35);

  let startY = 45;
  for (let i = 0; i < puntuaciones.length; i++) {
    doc.setFillColor(240, 230, 250); // lila claro
    doc.rect(20, startY + i * 10 - 6, 170, 8, 'F');
    doc.setTextColor(80, 0, 120);
    doc.text(`Pregunta ${i + 1}: ${puntuaciones[i]} punto`, 25, startY + i * 10);
  }

  doc.setFontSize(16);
  doc.setTextColor(75, 0, 130);
  doc.text(`Calificación final: ${total} / 7`, 105, startY + puntuaciones.length * 10 + 10, null, null, "center");

  doc.setFontSize(10);
  doc.setTextColor(150);
  doc.text("Hecho con amor por Eli.", 105, 280, null, null, "center");

  // Guardar el PDF
  doc.save("resultados_diagnostico_eli.pdf");
}
