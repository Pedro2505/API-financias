Financial Dashboard - Full-Stack Architecture
Este projeto consiste numa aplicação completa para monitorização de ativos financeiros, estruturada sob o modelo Cliente-Servidor. O objetivo principal foi implementar uma solução que integra a extração de dados reais, persistência em base de dados relacional e visualização dinâmica no frontend.

Arquitetura do Sistema
A aplicação está dividida em dois ecossistemas independentes:
Backend (Servidor): Desenvolvido em Python com FastAPI. É responsável pela lógica de negócio, extração de dados (ETL), gestão da base de dados SQLite e exposição dos dados via API REST.
Frontend (Cliente): Desenvolvido em React com Vite. Responsável pela interface do utilizador, consumo da API através de pedidos assíncronos e renderização de gráficos interativos.

Stack Tecnológica
Linguagens: Python 3.10+, JavaScript (ES6+).
Backend: FastAPI, Uvicorn, Pandas, SQLite.
Frontend: React, Axios, Recharts (Gráficos), Bootstrap (UI).
Comunicação: Protocolo HTTP, JSON, CORS Middleware.

Como Executar o Projeto
Para correr a aplicação completa, deves iniciar o Servidor e o Cliente em terminais separados.

1. Iniciar o Backend (Porta 8000)
cd API-de-An-lise-e-Previs-o-de-Ativos-Financeiros
# Ativar ambiente virtual
.\venv\Scripts\activate
# Executar servidor
uvicorn api:app --reload

2. Iniciar o Frontend (Porta 5173)
cd frontend-financeiro
npm install   # (Apenas na primeira execução)
npm run dev