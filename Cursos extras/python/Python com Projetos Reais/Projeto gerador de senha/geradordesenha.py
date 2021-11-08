#gerar uma senha segura
# 12 caracteres
# sendo 
# 3 maisuculas
# 3 minusculas
# 3 pontuações
# 3 digitos

#salvar senha em um arquivo

import string
import random
import time

#senha = maiusculas+minusculas+digitos+ponts
#base = string.ascii_letters #gera alfabeto -> maiusculas e minusculas
#maiusculas = string.ascii_uppercase
#minusculas = string.ascii_lowercase
#digitos = string.digits
#ponts = string.punctuation
#print(senha)

#criar metodo que sorteia 3 de cada
maiusculas = random.choices(string.ascii_uppercase, k=3)
minusculas = random.choices(string.ascii_lowercase, k=3)
digitos = random.choices(string.digits, k=3)
ponts = random.choices(string.punctuation, k=3)
# tem um padrão lógico - nao é ideal
# senha = maiusculas + minusculas + digitos + ponts #retorna uma lista
#combinação - mesclar os caracteres
senha = random.sample(maiusculas + minusculas + digitos + ponts, 12)
print(type(senha))
senha_segura = ''.join(senha) #transforma em um string
print(type(senha_segura))
print(senha_segura)

#importa a hora
horario = time.strftime('%d/%m/%y %H:%M:%S')

#criar um arquivo que guarda a senha
with open('senha.txt', 'a') as file:
    file.write(f'A senha foi gerada {horario} \n')
    file.write(f'A senha gerada foi:  {senha_segura} \n')