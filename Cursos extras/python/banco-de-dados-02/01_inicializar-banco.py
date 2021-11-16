#IMPORTAR O SQLITE3
import sqlite3

#CRIAR CONEXÃO
connection = sqlite3.connect("banco.db")

#PEGAR O CURSOR -> irá executar consultas
c = connection.cursor()