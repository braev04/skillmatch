import { cargarVagas } from "./dados.js";
import { calcularMatch, crearContador } from "./motor.js";
import { renderCards } from "./ui.js";
import { guardarPerfil, cargarPerfil } from "./storage.js";

const perfilGuardado = cargarPerfil();
if (perfilGuardado) {
  console.log("Perfil cargado:", perfilGuardado);
}
const form = document.getElementById("formPerfil");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const perfil = {
    nombre: nombre.value,
    area: area.value,
    skills: skills.value.split(",").map(s => s.trim())
  };

  if (!perfil.nombre || !perfil.skills.length) {
    alert("Completa todos los campos");
    return;
  }

  guardarPerfil(perfil);

  const vagas = await cargarVagas();
  if (!vagas) return;

  const resultados = vagas
  .map(v => calcularMatch(perfil, v))
  .sort((a, b) => b.compat - a.compat);
  
  // recomendaciones
resultados.forEach(r => {
  if (r.nivel === "Baja") {
    r.recomendacion = "Aprender: " + r.faltantes.join(", ");
  } else {
    r.recomendacion = "Buen match";
  }
});

  renderCards(resultados);

  //  mejor match
  const mejor = resultados.reduce((a, b) =>
    a.compat > b.compat ? a : b
  );

  console.log("🏆 Mejor:", mejor);
});

// closure usado
const contador = crearContador();
console.log("Clicks:", contador());
console.log("Clicks:", contador());