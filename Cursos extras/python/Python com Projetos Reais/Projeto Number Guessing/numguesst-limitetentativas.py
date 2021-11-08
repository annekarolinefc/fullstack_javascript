#o Algoritmo vai gerar um numero e temos que adivinhar
#contar tentativas

import random
numero = random.randint(0, 10)
tentativa = 3

while True:
    tentativa-=1
    guess = int(input("Adivinhe o número: "))
    if guess == numero:
        print(f'Você adivinhou o numero {numero} na {tentativa}ª tentativa. Parabéns!')
        break
    print(f'Você tem somente {tentativa} tentativa(s).')
    
    if tentativa == 0:
        print(f'VOCÊ PERDEU. O numero sorteado era {numero}.')
        break

    

