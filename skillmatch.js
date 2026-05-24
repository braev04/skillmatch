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

// MEJORAS PRO 

// 1. 📊 Mostrar resultados de forma profesional
function mostrarResultadosBonitos(resultados) {
  console.log("\n===== RESULTADOS DETALLADOS =====");

  resultados.forEach(r => {
    console.log(`
Candidato: ${r.candidato}
Vacante: ${r.vacante}
Compatibilidad: ${r.porcentaje.toFixed(2)}%
Coincidencias: ${r.coincidencias.join(", ") || "Ninguna"}
Faltantes: ${r.faltantes.join(", ") || "Ninguna"}
--------------------------------------`);
  });
}

// 2. 🏆 TOP 3 candidatos por vacante
function topCandidatosPorVacante(resultados, vacantes) {
  console.log("\n===== TOP CANDIDATOS POR VACANTE =====");

  vacantes.forEach(v => {
    const top = resultados
      .filter(r => r.vacante === v.nombre)
      .sort((a, b) => b.porcentaje - a.porcentaje)
      .slice(0, 3);

    console.log(`\nVacante: ${v.nombre}`);
    top.forEach((t, i) => {
      console.log(
        `${i + 1}. ${t.candidato} (${t.porcentaje.toFixed(2)}%)`
      );
    });
  });
}

// 3. ⚠️ Validaciones extra
function validarDatos(candidatos, vacantes) {
  console.log("\n===== VALIDACIÓN =====");

  candidatos.forEach(c => {
    if (!c.habilidades || c.habilidades.length === 0) {
      console.log(`⚠️ ${c.nombre} no tiene habilidades`);
    }
  });

  vacantes.forEach(v => {
    if (!v.habilidades || v.habilidades.length === 0) {
      console.log(`⚠️ La vacante ${v.nombre} no tiene habilidades`);
    }
  });
}

// 4. 💾 Guardar resultados en archivo JSON
const fs = require("fs");

function guardarResultados(resultados) {
  fs.writeFileSync(
    "resultados.json",
    JSON.stringify(resultados, null, 2)
  );
  console.log("\n📁 Resultados guardados en resultados.json");
}

// 5. ⚡ Simulación ASÍNCRONA real 
function analizarAsync(candidato) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`⏳ Analizando: ${candidato.nombre}`);
      resolve();
    }, 500);
  });
}

async function ejecutarAnalisisAsync(candidatos) {
  console.log("\n===== ANÁLISIS ASÍNCRONO =====");

  for (let c of candidatos) {
    await analizarAsync(c);
  }

  console.log("✅ Análisis completo");
}

// 6. 📈 Ranking global (mejores matches)
function rankingGlobal(resultados) {
  console.log("\n===== RANKING GLOBAL =====");

  const ordenados = [...resultados].sort(
    (a, b) => b.porcentaje - a.porcentaje
  );

  ordenados.slice(0, 5).forEach((r, i) => {
    console.log(
      `${i + 1}. ${r.candidato} → ${r.vacante} (${r.porcentaje.toFixed(
        2
      )}%)`
    );
  });
}
// 🚀 EJECUCIÓN DE MEJORAS


validarDatos(candidatos, vacantes);
mostrarResultadosBonitos(resultados);
topCandidatosPorVacante(resultados, vacantes);
rankingGlobal(resultados);
guardarResultados(resultados);
ejecutarAnalisisAsync(candidatos);