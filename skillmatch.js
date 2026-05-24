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
const resultados = vacantes.map(v =>
  analizarCompatibilidad(candidato, v)
);

const mejorVacante = resultados.reduce((mejor, actual) =>
  actual.porcentaje > mejor.porcentaje ? actual : mejor
);

//Callback
function mostrarResultado(nombre, callback) {
  console.log("Analizando candidato...");
  callback(nombre);
}

mostrarResultado(candidato.nombre, (nombre) => {
  console.log(`Análisis finalizado para ${nombre}`);
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

  const nuevosResultados = datos.map(v =>
    analizarCompatibilidad(candidato, v)
  );

  console.log(nuevosResultados);
}

iniciarSistema();

// FInal 
console.log("Mejor vacante:");
console.log(mejorVacante);

console.log("Recomendación:");
console.log(`Debes aprender: ${mejorVacante.faltantes.join(", ")}`);