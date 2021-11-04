#OPERADORES ARITMETICOS

#ADIÇÃO
a = 2 + 3
#SUBTRAÇÃO
b = 2 - 3
#DIVISÃO
c = 2 / 3
#DIVISÃO INTEIRA
d = 2 // 3
#MULTIPLICAÇÃO
e = 2 * 3
#RESTO
f = 2 % 3
#POTENCIAÇÃO
g = 2 ** 3

print(a, b, c, d, e, f, g)

#pode fazer operação dentro do print
print(a+1, b+1)

#OPERADORES RELACIONAIS
comparacao1 = 5 > 3
print(comparacao1) #retorna true
comparacao2 = 5 < 3
print(comparacao2) #retorna false

#Os seis operadores lógicos são: > , < , >= , <= , == , !=

#OPERADORES LOGICOS
#NOT - negar uma expressão lógica
comparacao1 = 5 > 3 #resultado é verdadeiro
comparacao1 = not(5>3) #retorna falso

#AND
comparacao1 = 5 > 3 and 6>3 #retorna true
comparacao2 = 5 < 3 and 6>3 #retorna false

#OR
comparacao1 = 5 > 3 or 6 > 3 #retorna true
comparacao2 = 5 < 3 or 6 > 3 #retorna true