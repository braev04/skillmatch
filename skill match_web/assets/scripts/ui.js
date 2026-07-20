export function renderCards(resultados) {
  const container = document.getElementById("cards");
  container.innerHTML = "";

  resultados.forEach(r => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${r.cargo}</h3>
      <p>${r.empresa}</p>
      <p>Match: ${r.compat.toFixed(0)}%</p>
      <p>Nivel: ${r.nivel}</p>
      <p>${r.recomendacion || ""}</p>
    `;

    if (r.faltantes.length) {
      card.innerHTML += `
        <p>Te falta aprender: ${r.faltantes.join(", ")}</p>
      `;
    }

    container.appendChild(card);
  });
}