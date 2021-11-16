#IMPORTAR BANCO DE DADOS
import _sqlite3

#CRIAR BANCO DE DADOS
banco = _sqlite3.connect('primeiro_banco.db')

#Objeto cursos recebe o banco e usa o metodo cursor para digitar os comandos
cursor = banco.cursor()

#CRIAR TABELA
cursor.execute("CREATE TABLE pessoas ( nome text, idade integer, email text)")

#INSERIR REGISTROS NA TABELA
cursor.execute("INSERT INTO pessoas VALUES('Maria', 40, 'maria_123@gmail.com')")

#CONFIRMAR ENVIO PARA A TABELA
banco.commit()

