#Verificar se um número é primo
    #ex: 2, 5, 7, 11, 13 ...
#Numero primo tem somente 2 divisores

#usuário entrando com o dado
numero = int(input("Digite um numero: "))

if numero == 2:
    print(f'{numero} é primo');
elif numero%2 ==0:
    print(f'{numero} não primo');
else:
    divisores = [];
    for i in range(1, numero+1):
        if numero%i==0:
            divisores.append(i) #adicionando o valor na lista
    if len(divisores)==2:
        print(f'{numero} é primo!')
    else:
        print(f'{numero} não primo!')

#para rodar o programa
#digite no terminal, dentro da pasta: python numprimo.py