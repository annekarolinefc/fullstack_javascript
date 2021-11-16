#IMPORTAR O SQLITE3
import sqlite3

#CRIAR CONEXÃO
connection = sqlite3.connect("banco.db")

#PEGAR O CURSOR -> irá executar consultas
c = connection.cursor()

#CRIAR TABELA
def create_table():
    c.execute('CREATE TABLE dados (id integer, unix real, keyword text, \ datestmap text, value real)')

#CHAMAR A FUNÇÃO PARA CRIAR TABELA
create_table()