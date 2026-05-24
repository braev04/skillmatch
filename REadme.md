🧠 SkillMatch

Motor de análise de compatibilidade entre candidatos e vagas baseado em habilidades técnicas.

Este projeto simula, em escala reduzida, o funcionamento de sistemas de matching utilizados em plataformas de recrutamento, incorporando conceitos fundamentais de engenharia de software e JavaScript moderno.

📌 Contexto

Em processos de recrutamento técnico, um dos principais desafios é avaliar rapidamente o nível de aderência entre candidatos e requisitos de uma vaga.

O SkillMatch aborda esse problema através de um modelo determinístico e extensível que permite:

Quantificar compatibilidade técnica
Identificar lacunas de habilidades (skill gaps)
Gerar rankings comparativos
Sugerir trilhas de aprendizado
🧩 Abordagem

O sistema utiliza um modelo baseado em interseção de conjuntos entre:

habilidades do candidato
habilidades exigidas pela vaga

A partir disso, são derivados:

Score percentual de compatibilidade
Lista de habilidades coincidentes
Lista de habilidades faltantes
Classificação qualitativa (Alta, Média, Baixa)
Recomendação de aprendizado
🧠 Regra de Negócio
score = (|interseção| / |habilidades da vaga|) * 100
Classificação
Alta: ≥ 80%
Média: 50% – 79%
Baixa: < 50%
Recomendação
Sem faltantes → candidato apto
Com faltantes → sugestão direta de estudo
⚙️ Funcionalidades
Core
Avaliação candidato × vaga
Cálculo de compatibilidade
Identificação de habilidades faltantes
Classificação automática
Análise
Ranking por vaga (Top 3)
Ranking global (melhores matches)
Melhor combinação geral
Engenharia
Programação Orientada a Objetos (POO)
Herança (classe VagaFrontEnd)
Uso de this em métodos
Closure para encapsulamento de contexto
Callback para processamento
Promise + async/await (simulação de servidor)
Infraestrutura
Validação de dados
Simulação de carregamento assíncrono
Persistência em JSON
Output
Logs estruturados
Resultados detalhados e legíveis
Exportação para consumo externo
🏗️ Arquitetura

Mesmo sendo um projeto de arquivo único (escopo educacional), segue princípios de separação de responsabilidades:

[ Entrada de Dados ]
        ↓
[ Validação ]
        ↓
[ Motor de Matching (POO) ]
        ↓
[ Processamento / Ranking ]
        ↓
[ Output + Persistência ]
🔎 Componentes
🧠 Matching Engine

Responsável pela lógica de compatibilidade (classe Vaga)

🧱 POO Layer
Classe base: Vaga
Classe derivada: VagaFrontEnd
Uso de herança e encapsulamento
🔒 Closure Layer

Encapsulamento de lógica por vaga (crearAnalizador)

🔄 Async Layer

Simulação de carregamento de dados via Promise + async/await

📊 Aggregator

Responsável por rankings e consolidação de resultados

💾 Persistence Layer

Exportação de dados para arquivo JSON

▶️ Execução
Requisitos
Node.js (>= 14)
Rodar aplicação
node skillmatch.js
📊 Exemplo de Output
Candidato: Juan
Vacante: Frontend
Compatibilidade: 100.00% (Alta)
Coincidências: JS, HTML, CSS
Faltantes: Nenhuma
Recomendação: Listo para aplicar 🚀
📁 Persistência

Os resultados são exportados automaticamente para:

/resultados.json

Possíveis usos:

Integração com front-end
Análise de dados
Histórico de execuções
⚠️ Decisões de Design
1. Modelo determinístico

Priorização de:

Clareza
Previsibilidade
Facilidade de manutenção
2. Peso uniforme de habilidades

Todas as habilidades possuem o mesmo impacto no score.

Trade-off: simplicidade vs realismo

3. Simulação assíncrona

Uso de Promise + async/await para simular ambiente real de I/O

4. Uso de POO

Estrutura orientada a objetos para facilitar escalabilidade

🚧 Limitações
Não considera nível de proficiência
Não utiliza pesos por habilidade
Não há persistência em banco de dados
Interface limitada ao terminal
🚀 Evolução Natural
🔹 Backend
API REST (Node + Express)
Banco de dados (MongoDB/PostgreSQL)
Arquitetura em camadas
🔹 Inteligência
Peso por habilidade
Score baseado em relevância
Sistema de recomendação avançado
🔹 Frontend
Dashboard interativo
Visualização de rankings
Input dinâmico de dados
🎯 Objetivo Técnico

Este projeto demonstra domínio em:

Lógica de programação
Estruturas de dados (arrays, objetos)
Métodos de array (filter, reduce, etc.)
Programação Orientada a Objetos
Herança e uso de this
Closures e callbacks
Programação assíncrona (Promise, async/await)
Organização de código
Pensamento arquitetural
👨‍💻 Autor

Projeto desenvolvido como prática intencional de desenvolvimento backend, com foco em evolução técnica, organização de código e preparação para cenários reais de mercado.

📄 Licença

Uso educacional e livre para estudo.