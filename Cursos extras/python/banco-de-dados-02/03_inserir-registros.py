#IMPORTAR O SQLITE3
import sqlite3

#CRIAR CONEXÃO
connection = sqlite3.connect("banco.db")

#PEGAR O CURSOR -> irá executar consultas
c = connection.cursor()

#INSERIR REGISTROS
def dataentry():
    c.execute("iNSERT INTO dados VALUES(1, 1365952181.288, 'Python Sentiment', \ '2013-04-14 10:09:41', 5)")

dataentry()