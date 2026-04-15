import yfinance as yf
import pandas as pd 
import sqlite3

ticker_simbolo = "MXRF11.SA" 

print(f"Conectando á API para buscar dados de {ticker_simbolo}...")
ativo = yf.Ticker(ticker_simbolo)

historico_de_dados = ativo.history(period='1y')

print("Criando banco de dados e salvando informações...")

conexao = sqlite3.connect("banco_dados.db")

historico_de_dados.to_sql("historico_mxrf11", conexao, if_exists="replace")

conexao.close()
print("✅ Sucesso! Dados salvos no banco SQLite.")