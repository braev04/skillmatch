export function guardarPerfil(perfil) {
  localStorage.setItem("perfil", JSON.stringify(perfil));
}

export function cargarPerfil() {
  const data = localStorage.getItem("perfil");
  return data ? JSON.parse(data) : null;
}