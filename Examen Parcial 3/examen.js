function calcularPago() {
	const horas = parseFloat(document.getElementById("horas").value);
	const tipo = document.getElementById("carros").value;
	const resultado = document.getElementById("resultado");

	if (isNaN(horas) || horas <= 0 || tipo === "") {
		resultado.textContent = "Por favor, ingresa todos los datos correctamente.";
		return;
	}

	let tarifa = 0;

	if (tipo === "chico") {
		tarifa = 20;
	} else if (tipo === "camioneta") {
		tarifa = 30;
	} else if (tipo === "camion") {
		tarifa = 40;
	}

	const total = horas * tarifa;
	resultado.textContent = `El total a pagar es de: $${total.toFixed(2)}`;
}
