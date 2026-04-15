from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware # Essa linha é obrigatória
import sqlite3
import pandas as pd

# Inicializa a nossa API
app = FastAPI(
    title="API de Dados Financeiros",
    description="Portfólio de Ciência de Dados e Back-end - MXRF11",
    version="1.0"
)

# --- AQUI ESTÁ O CRACHÁ VIP (CORS) ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # O "*" significa "deixe o React entrar"
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"mensagem": "Bem-Vindo á sua API FInanceira! O Servidor está Online"}


@app.get("/ativos/mxrf11")
def buscar_dados_mxrf11():
    coenxao = sqlite3.connect("banco_dados.db")
    
    try:
        query = "SELECT * FROM historico_mxrf11 ORDER BY Date DESC LIMIT 5"
        df = pd.read_sql_query(query, coenxao)

        return df.to_dict(orient="records")
    except Exception as e:
        return {"erro": f"Ops, algo deu errado: {e}"}
    
    finally:
        coenxao.close()