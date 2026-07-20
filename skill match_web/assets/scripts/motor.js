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
