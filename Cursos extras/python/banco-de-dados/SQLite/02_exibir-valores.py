#IMPORTAR BANCO DE DADOS
import _sqlite3

#CRIAR BANCO DE DADOS
banco = _sqlite3.connect('primeiro_banco.db')

#Objeto cursos recebe o banco e usa o metodo cursor para digitar os comandos
cursor = banco.cursor()

#SELECIONAR DADOS
cursor.execute("SELECT * FROM pessoas")

#EXIBIR
print(cursor.fetchall())