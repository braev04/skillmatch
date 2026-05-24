// Datos de ejemplo
const candidatos = [
  { nombre: "Brayan", habilidades: ["HTML", "CSS", "JavaScript"] },
  { nombre: "Ana", habilidades: ["Python", "SQL", "Django"] },
  { nombre: "Carlos", habilidades: ["Java", "Spring"] },
  { nombre: "Lucia", habilidades: ["React", "CSS", "HTML"] },
  { nombre: "Mateo", habilidades: ["Node", "Express", "MongoDB"] },
  { nombre: "Sofia", habilidades: ["JavaScript", "React", "Node"] },
  { nombre: "Luis", habilidades: ["C#", ".NET"] },
  { nombre: "Elena", habilidades: ["HTML", "CSS"] }
];

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
// POO+HERENCIA
class Vacante {
  constructor(nombre, habilidades) {
    this.nombre = nombre;
    this.habilidades = habilidades;
  }
}

class VacanteFrontEnd extends Vacante {
  constructor(nombre, habilidades, nivel) {
    super(nombre, habilidades);
    this.nivel = nivel;
  }
}
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
const resultados = [];

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

const mejorVacante = resultados.reduce((mejor, actual) => {
  return actual.porcentaje > mejor.porcentaje ? actual : mejor;
}, resultados[0]);

//Callback
function mostrarResultado(nombre, callback) {
  console.log("Analizando candidato...");
  callback(nombre);
}

candidatos.forEach(c => {
  mostrarResultado(c.nombre, (nombre) => {
    console.log(`Análisis finalizado para ${nombre}`);
  });
});
//Closure Con Contador

function crearContador() {
  let total = 0;

  return function () {
    total++;
    return total;
  };
}

const contador = crearContador();
contador();
contador();
// Promesas+Async/Await
function buscarVagasSimuladas(vagas) {
  return new Promise(resolve => {
    setTimeout(() => resolve(vagas), 1000);
  });
}

async function iniciarSistema() {
  const datos = await buscarVagasSimuladas(vacantes);

 const resultados = [];

candidatos.forEach(candidato => {
  vacantes.forEach(vacante => {
    const resultado = analizarCompatibilidad(candidato, vacante);
    resultados.push(resultado);
  });
});

  console.log(resultados);
}

iniciarSistema();

// FInal 
console.log("Mejor vacante:");
console.log(mejorVacante);

console.log("Recomendación:");
console.log(`Debes aprender: ${mejorVacante.faltantes.join(", ")}`);