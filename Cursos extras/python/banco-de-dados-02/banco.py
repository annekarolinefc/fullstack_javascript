#IMPORTAR O SQLITE3
import sqlite3

#CRIAR CONEXÃO
connection = sqlite3.connect("banco.db")

#PEGAR O CURSOR -> irá executar consultas
c = connection.cursor()

#CRIAR TABELA
def create_table():
    c.execute('CREATE TABLE dados (id integer, unix real, keyword text, datestmap text, value real)')

#CHAMAR A FUNÇÃO PARA CRIAR TABELA
#create_table()

#INSERIR REGISTROS
def dataentry():
    c.execute("iNSERT INTO dados VALUES(1, 1365952181.288, 'Python Sentiment', '2013-04-14 10:09:41', 5)")
    c.execute("iNSERT INTO dados VALUES(2, 1365952181.288, 'Python Sentiment', '2013-04-14 10:09:41', 5)")
    c.execute("iNSERT INTO dados VALUES(3, 1365952181.288, 'Python Sentiment', '2013-04-14 10:09:41', 5)")
    #confirmar conexão
    connection.commit();

dataentry()