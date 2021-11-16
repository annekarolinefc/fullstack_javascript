#IMPORTAR BANCO DE DADOS
import _sqlite3

try:
    #CRIAR BANCO DE DADOS
    banco = _sqlite3.connect('primeiro_banco.db')

    #Objeto cursos recebe o banco e usa o metodo cursor para digitar os comandos
    cursor = banco.cursor()

    #COMANDO PARA DELETAR DADO
    cursor.execute("DELETE from pessoas WHERE idade = 30")

    banco.commit()
    banco.close()
    print("OS DADOS FORAM REMOVIDOS COM SUCESSO!")

except _sqlite3.Error as erro:
    print("ERRO AO EXCLUIR: ", erro)