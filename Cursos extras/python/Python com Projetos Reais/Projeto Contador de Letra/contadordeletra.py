# O usuário irpa entrar com um texto com uma letra
# contar a quantidade de vezes que essa letra aparece no texto 

texto = str(input("Digite um texto: "))
letra = str(input("Digite uma letra: "))
contador = 0

for i in texto:
    #print(i) -> percorrendo letra por letra da string
    if i == letra:
        contador +=1
print(f'A letra aparece {contador} vezes.')