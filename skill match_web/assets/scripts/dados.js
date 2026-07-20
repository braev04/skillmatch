export async function cargarVagas() {
  const estado = document.getElementById("estado");

  try {
    estado.textContent = "Cargando...";

    const res = await fetch("assets/dados/vagas.json");

    if (!res.ok) throw new Error("Error");

    const data = await res.json();

    estado.textContent = data.length ? "" : "Sin resultados";

    return data;

  } catch (e) {
    estado.textContent = "Error al cargar";
  }
}