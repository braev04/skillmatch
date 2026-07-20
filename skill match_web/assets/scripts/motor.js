export function calcularMatch(perfil, vaga) {
  const encontradas = vaga.skills.filter(skill =>
    perfil.skills.includes(skill)
  );

  const faltantes = vaga.skills.filter(skill =>
    !perfil.skills.includes(skill)
  );

  const compat = (encontradas.length / vaga.skills.length) * 100;

  return {
    ...vaga,
    compat,
    encontradas,
    faltantes,
    nivel: clasificar(compat)
  };
}

// ✅ niveles (importante para nota)
function clasificar(valor) {
  if (valor >= 70) return "Alta";
  if (valor >= 40) return "Media";
  return "Baja";
}

// ✅ closure
export function crearContador() {
  let contador = 0;

  return function () {
    contador++;
    return contador;
  };
}