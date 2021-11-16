#IMPORTAR BANCO DE DADOS
import _sqlite3

#CRIAR BANCO DE DADOS
banco = _sqlite3.connect('primeiro_banco.db')

#Objeto cursos recebe o banco e usa o metodo cursor para digitar os comandos
cursor = banco.cursor()

#INSERIR REGISTROS NA TABELA
cursor.execute("INSERT INTO pessoas VALUES('João', 20, 'joao_20@gmail.com')")

#CONFIRMAR ENVIO PARA A TABELA
banco.commit()