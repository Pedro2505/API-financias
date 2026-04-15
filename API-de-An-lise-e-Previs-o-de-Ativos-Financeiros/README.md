# 

API de Análise de Ativos Financeiros

Um serviço de Back-end completo focado na extração, armazenamento e disponibilização de dados do mercado financeiro brasileiro. 

Este projeto faz parte do meu portfólio de Ciência da Computação, unindo **Engenharia de Dados** e **Desenvolvimento Back-end**.

## O Problema que este projeto resolve
Aplicações financeiras precisam de dados em tempo real para análises, previsões e exibição para o usuário. Esta API atua como um "motor", buscando o histórico de negociações de Fundos Imobiliários (FIIs) diretamente da bolsa, persistindo esses dados em um banco de dados relacional e servindo-os através de rotas REST documentadas.

## Tecnologias Utilizadas
A arquitetura foi desenhada para ser rápida, moderna e facilmente escalável:
* **Python (3.10+):** Linguagem principal do projeto.
* **FastAPI:** Framework Back-end ultrarrápido para a criação da API.
* **SQLite:** Banco de dados relacional nativo para armazenamento e cache dos dados.
* **Pandas:** Biblioteca de Ciência de Dados para manipulação e estruturação das tabelas.
* **yfinance:** Integração com a API do Yahoo Finance para extração de dados reais da bolsa (B3).

## Como rodar o projeto localmente

1. Clone este repositório:
```bash
git clone [https://github.com/Pedro2505/API-de-An-lise-e-Previs-o-de-Ativos-Financeiros.git](https://github.com/Pedro2505/API-de-An-lise-e-Previs-o-de-Ativos-Financeiros.git)

2. Crie e ative um ambiente virtual: 
python -m venv venv
# Windows: venv\Scripts\activate
# Linux/Mac: source venv/bin/activate

3. Instale as dependências:
pip install fastapi uvicorn pandas yfinance

4. Popule o banco de dados e inicie o servidor:
python coletor.py
uvicorn api:app --reload