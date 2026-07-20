export async function cargarVagas() {
  const estado = document.getElementById("estado");

  try {
    estado.textContent = "Cargando...";

    const res = await fetch("data/vagas.json");

    if (!res.ok) throw new Error("Error");

    const data = await res.json();

    if (!data.length) {
      estado.textContent = "Sin resultados";
    } else {
      estado.textContent = "";
    }

    return data;

  } catch (e) {
    estado.textContent = "Error al cargar";
  }
}
return {
  ...vaga,
  compat,
  encontradas,
  faltantes,
  nivel: clasificar(compat)
};
const mejor = resultados.reduce((a, b) =>
  a.compat > b.compat ? a : b
);