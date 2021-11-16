#IMPORTAR O SQLITE3
import sqlite3

#CRIAR CONEXÃO
connection = sqlite3.connect("banco.db")

#PEGAR O CURSOR -> irá executar consultas
c = connection.cursor()


#REALIZANDO A CONSULTA
sql = 'SELECT * FROM dados'
sql2 = 'SELECT * FROM dados where id=1'

def read_data(wordUsed):
    for row in c.execute(sql, (wordUsed)):
        print row[0]

read_data(sql, '1')