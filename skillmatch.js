const candidatos = [
  { nombre: "Juan", habilidades: ["JS", "HTML", "CSS"] },
  { nombre: "Ana", habilidades: ["Python", "SQL", "Java"] },
  { nombre: "Luis", habilidades: ["Java"] },
  { nombre: "Maria", habilidades: ["SQL"] },
  { nombre: "Pedro", habilidades: ["Node"] },
  { nombre: "Sofia", habilidades: ["CSS"] },

];

const vacantes = [
  { nombre: "Frontend", habilidades: ["JS", "HTML", "CSS"] },
  { nombre: "Backend", habilidades: ["Python", "Node", "SQL"] }
];

const resultados = [];

// Función para analizar compatibilidad
function analizarCompatibilidad(candidato, vacante) {
  const coincidencias = candidato.habilidades.filter(h =>
    vacante.habilidades.includes(h)
  );

  const faltantes = vacante.habilidades.filter(h =>
    !candidato.habilidades.includes(h)
  );

  const porcentaje =
    (coincidencias.length / vacante.habilidades.length) * 100;

  return {
    nombre: vacante.nombre,
    porcentaje,
    coincidencias,
    faltantes
  };
}

// RECORRER TODOS LOS CANDIDATOS Y VACANTES
candidatos.forEach(candidato => {
  vacantes.forEach(vacante => {
    const resultado = analizarCompatibilidad(candidato, vacante);

    resultados.push({
      candidato: candidato.nombre,
      vacante: resultado.nombre,
      porcentaje: resultado.porcentaje,
      coincidencias: resultado.coincidencias,
      faltantes: resultado.faltantes
    });
  });
});

// Mejor resultado global
const mejorVacante = resultados.reduce((mejor, actual) =>
  actual.porcentaje > mejor.porcentaje ? actual : mejor
);

// Callback
function mostrarResultado(nombre, callback) {
  console.log("Analizando candidato...");
  callback(nombre);
}

// Mostrar resultados correctamente
candidatos.forEach(c => {
  mostrarResultado(c.nombre, nombre => {
    console.log(`Análisis finalizado para ${nombre}`);
  });
});

// Mostrar resultados finales
console.log("\nResultados:");
console.log(resultados);

console.log("\nMejor combinación:");
console.log(mejorVacante);