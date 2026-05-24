# 🧠 SkillMatch

Motor de análise de compatibilidade entre candidatos e vagas baseado em habilidades técnicas.

Este projeto simula, em escala reduzida, o funcionamento de sistemas de matching utilizados em plataformas de recrutamento, com foco em clareza de lógica, extensibilidade e organização de código.

---

## 📌 Contexto

Em processos de recrutamento, um dos principais desafios é avaliar rapidamente o nível de aderência entre candidatos e requisitos técnicos de uma vaga.

O **SkillMatch** resolve esse problema através de um modelo determinístico simples, porém eficaz, que permite:

- Quantificar compatibilidade
- Identificar gaps de habilidades
- Gerar rankings comparativos

---

## 🧩 Abordagem

O sistema utiliza um modelo baseado em interseção de conjuntos para calcular compatibilidade entre:

- `habilidades do candidato`
- `habilidades exigidas pela vaga`

A partir disso, são gerados:

- Score percentual
- Lista de habilidades coincidentes
- Lista de habilidades faltantes

---

## 🧠 Regra de Negócio


score = (|interseção| / |habilidades da vaga|) * 100


Essa abordagem garante:

- 📊 Comparabilidade entre candidatos
- ⚖️ Neutralidade (todas as habilidades têm peso igual)
- 🔄 Facilidade de evolução (ex: introdução de pesos)

---

## ⚙️ Funcionalidades

### Core
- Avaliação candidato × vaga
- Cálculo de score de compatibilidade
- Identificação de gaps técnicos

### Análise
- Ranking por vaga (Top N candidatos)
- Ranking global (melhores matches)

### Infraestrutura
- Validação de dados de entrada
- Persistência em JSON
- Simulação assíncrona (processamento)

### Output
- Logs estruturados e legíveis
- Exportação para consumo externo

---

## 🏗️ Arquitetura

Embora implementado em um único arquivo (escopo educacional), o projeto segue separação lógica de responsabilidades:


Camadas conceituais:

[ Entrada de Dados ]
↓
[ Validação ]
↓
[ Motor de Matching ]
↓
[ Processamento / Ranking ]
↓
[ Output + Persistência ]


### 🔎 Componentes

- **Matching Engine**
  - Responsável pela lógica de compatibilidade

- **Aggregator**
  - Consolida resultados e rankings

- **Validator**
  - Garante integridade mínima dos dados

- **Persistence Layer**
  - Exporta resultados para JSON

- **Async Simulation Layer**
  - Simula processamento assíncrono (I/O-like)

---

## ▶️ Execução

### Requisitos

- Node.js (>= 14)

### Rodar aplicação

```bash
node skillmatch.js
📊 Exemplo de Output
Candidato: Carlos
Vaga: Backend
Compatibilidade: 66.67%
Coincidências: Python, SQL
Faltantes: Node
📁 Persistência

Os resultados são exportados automaticamente para:

/resultados.json

Esse arquivo pode ser reutilizado para:

Integração com front-end
Processos analíticos
Armazenamento histórico
⚠️ Decisões de Design
1. Modelo determinístico

Optou-se por um algoritmo simples para priorizar:

Clareza
Previsibilidade
Facilidade de manutenção
2. Peso uniforme de habilidades

Todas as habilidades possuem o mesmo impacto no score.

Trade-off: simplicidade vs. realismo

3. Processamento síncrono com simulação async

A aplicação é síncrona por natureza, mas inclui uma camada assíncrona para demonstrar domínio de async/await.

🚧 Limitações
Não considera nível de proficiência
Não há pesos diferenciados por habilidade
Não utiliza base de dados
Interface limitada ao terminal
🚀 Evolução Natural do Projeto

Este projeto foi estruturado pensando em evolução incremental. Próximos passos naturais:

🔹 Backend
API REST (Express)
Persistência real (MongoDB/PostgreSQL)
Camadas separadas (Controller / Service / Repository)
🔹 Inteligência
Sistema de pesos por habilidade
Score baseado em relevância
Recomendação automática de candidatos
🔹 Interface
Dashboard web
Visualização de rankings
Input dinâmico de dados
🎯 Objetivo Técnico

Este projeto demonstra capacidade de:

Modelagem de problema real
Estruturação de lógica de negócio
Uso eficiente de arrays (filter, reduce)
Controle de fluxo
Programação assíncrona
Organização e escalabilidade de código
👨‍💻 Autor

Projeto desenvolvido como parte de prática intencional em desenvolvimento backend, com foco em evolução técnica e preparação para cenários reais de mercado.

📄 Licença

Uso educacional e livre para estudo.