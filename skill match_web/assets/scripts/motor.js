// calcular match entre perfil y vaga
class Match {
  constructor(perfil, vaga) {
    this.cargo = vaga.cargo;
    this.empresa = vaga.empresa;
    this.skills = vaga.skills;

    this.encontradas = vaga.skills.filter(s =>
      perfil.skills.includes(s)
    );

    this.faltantes = vaga.skills.filter(s =>
      !perfil.skills.includes(s)
    );

    this.compat = (this.encontradas.length / vaga.skills.length) * 100;
    this.nivel = this.clasificar();
  }

  clasificar() {
    if (this.compat >= 70) return "Alta";
    if (this.compat >= 40) return "Media";
    return "Baja";
  }
}

export function calcularMatch(perfil, vaga) {
  return new Match(perfil, vaga);
}
//  closure
export function crearContador() {
  let contador = 0;

  return function () {
    contador++;
    return contador;
  };
}