export class Vaga {
  constructor(empresa, cargo, skills) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.skills = skills;
  }
}

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
    faltantes
  };
}
function clasificar(compat) {
  if (compat >= 70) return "Alta";
  if (compat >= 40) return "Media";
  return "Baja";
}
export class VagaTech extends Vaga {
  constructor(empresa, cargo, skills, nivel) {
    super(empresa, cargo, skills);
    this.nivel = nivel;
  }

  descripcion() {
    return `${this.cargo} - ${this.nivel}`;
  }
}
export function crearContador() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}
if (!vagas) return;