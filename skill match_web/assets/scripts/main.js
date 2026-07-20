import { cargarVagas } from "./dados.js";
import { calcularMatch } from "./motor.js";
import { renderCards } from "./ui.js";
import { guardarPerfil } from "./storage.js";

document.getElementById("formPerfil")
.addEventListener("submit", async (e) => {

  e.preventDefault();

  const perfil = {
    nombre: nombre.value,
    area: area.value,
    skills: skills.value.split(",").map(s => s.trim())
  };

  guardarPerfil(perfil);

  const vagas = await cargarVagas();

  const resultados = vagas.map(v =>
    calcularMatch(perfil, v)
  );

  renderCards(resultados);
});