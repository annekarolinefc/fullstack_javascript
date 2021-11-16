#IMPORTAR BANCO DE DADOS
import _sqlite3

nome = "Juliana"
idade = 28
email = "juliana@gmail.com"

#CRIAR BANCO DE DADOS
banco = _sqlite3.connect('primeiro_banco.db')

#Objeto cursos recebe o banco e usa o metodo cursor para digitar os comandos
cursor = banco.cursor()

#ATUALIZAR DADOS
cursor.execute("UPDATE pessoas SET nome = 'Anne' WHERE idade = 28")

#CONFIRMAR ENVIO PARA A TABELA
banco.commit()