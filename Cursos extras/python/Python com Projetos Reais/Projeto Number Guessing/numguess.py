#o Algoritmo vai gerar um numero e temos que adivinhar
#contar tentativas

import random
numero = random.randint(0, 10)
tentativa = 1

while True:
    guess = int(input("Adivinhe o número: "))
    if guess == numero:
        print(f'Você adivinhou o numero {numero} na {tentativa}ª tentativa. Parabéns!')
        break
    print(f'Sua tentativa numero {tentativa}')
    tentativa+=1

    

