// Datos de ejemplo
const candidato = {
  nombre: "Brayan",
  habilidades: ["HTML", "CSS", "JavaScript"]
};

const vacantes = [
  {
    nombre: "Frontend Jr",
    habilidades: ["HTML", "CSS", "JavaScript"]
  },
  {
    nombre: "Frontend React",
    habilidades: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    nombre: "Backend Node",
    habilidades: ["Node", "Express", "MongoDB"]
  }
];
// Función De compatibilidad
function analizarCompatibilidad(candidato, vacante) {
  const coincidencias = vacante.habilidades.filter(h =>
    candidato.habilidades.includes(h)
  );

  const faltantes = vacante.habilidades.filter(h =>
    !candidato.habilidades.includes(h)
  );

  const porcentaje = (coincidencias.length / vacante.habilidades.length) * 100;

  return {
    nombre: vacante.nombre,
    porcentaje,
    coincidencias,
    faltantes
  };
}
// Analizar compatibilidad para cada vacante
const resultados = vacantes.map(v =>
  analizarCompatibilidad(candidato, v)
);

const mejorVacante = resultados.reduce((mejor, actual) =>
  actual.porcentaje > mejor.porcentaje ? actual : mejor
);
