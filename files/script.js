function calcularOEE() {
  const operativo = parseFloat(document.getElementById("operativo").value);
  const disponible = parseFloat(document.getElementById("disponible").value);
  const piezas = parseInt(document.getElementById("piezas").value);
  const buenas = parseInt(document.getElementById("buenas").value);
  const ideal = parseFloat(document.getElementById("ideal").value);

  if (isNaN(operativo) || isNaN(disponible) || isNaN(piezas) || isNaN(buenas) || isNaN(ideal)) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  const disponibilidad = operativo / disponible;
  const rendimiento = (piezas / (operativo * ideal));
  const calidad = buenas / piezas;
  const oee = disponibilidad * rendimiento * calidad;

  mostrarResultados(disponibilidad, rendimiento, calidad, oee);
}

function mostrarResultados(d, r, c, o) {
  const porc = x => (x * 100).toFixed(1) + "%";

  document.getElementById("resultadoOEE").textContent = `
📌 Disponibilidad: ${porc(d)}
📌 Rendimiento: ${porc(r)}
📌 Calidad: ${porc(c)}
📈 OEE Total: ${porc(o)}
`;

  document.getElementById("dispBar").style.setProperty("--value", porc(d));
  document.getElementById("rendBar").style.setProperty("--value", porc(r));
  document.getElementById("calBar").style.setProperty("--value", porc(c));
  document.getElementById("oeeBar").style.setProperty("--value", porc(o));
}

function resetear() {
  document.querySelectorAll("input").forEach(i => i.value = "");
  document.getElementById("resultadoOEE").textContent = "Esperando datos...";
  ["dispBar", "rendBar", "calBar", "oeeBar"].forEach(id => {
    document.getElementById(id).style.setProperty("--value", "0%");
  });
}
