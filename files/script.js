function calcularOEE() {
  const operativo = parseFloat(document.getElementById("operativo").value);
  const disponible = parseFloat(document.getElementById("disponible").value);
  const piezas = parseInt(document.getElementById("piezas").value);
  const buenas = parseInt(document.getElementById("buenas").value);
  const ideal = parseFloat(document.getElementById("ideal").value);

  if (isNaN(operativo) || isNaN(disponible) || isNaN(piezas) || isNaN(buenas) || isNaN(ideal)) {
    alert("Por favor, completá todos los campos correctamente.");
    return;
  }

  if (operativo > disponible) {
    alert("❌ El tiempo operativo no puede ser mayor al tiempo disponible.");
    return;
  }

  if (buenas > piezas) {
    alert("❌ Las piezas buenas no pueden superar la cantidad total producida.");
    return;
  }

  const disponibilidad = operativo / disponible;
  const rendimiento = piezas / (operativo * ideal);
  const calidad = buenas / piezas;
  const oee = disponibilidad * rendimiento * calidad;

  mostrarResultados(disponibilidad, rendimiento, calidad, oee);
}

function mostrarResultados(d, r, c, o) {
  const format = x => (x * 100).toFixed(1) + "%";
  const resultado = `
📌 Disponibilidad: ${format(d)}  
📌 Rendimiento: ${format(r)}  
📌 Calidad: ${format(c)}  
🎯 OEE Total: ${format(o)}
  `;

  document.getElementById("resultadoOEE").textContent = resultado;

  document.getElementById("barraDisp").style.width = format(d);
  document.getElementById("barraRend").style.width = format(r);
  document.getElementById("barraCal").style.width = format(c);
  document.getElementById("barraOEE").style.width = format(o);
}

function resetear() {
  document.querySelectorAll("input").forEach(i => i.value = "");
  document.getElementById("resultadoOEE").textContent = "Esperando datos...";
  ["barraDisp", "barraRend", "barraCal", "barraOEE"].forEach(id => {
    document.getElementById(id).style.width = "0%";
  });
}

function mostrarTooltip(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === "block" ? "none" : "block";
}
