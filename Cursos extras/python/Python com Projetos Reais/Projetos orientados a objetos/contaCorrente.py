"""
Classe conta corrente: Crie uma classe para implementar uma 
conta corrente.

Classe deve possuir os seguintes atributos: 
    - numero da conta
    - conta do correntista 
    - saldo

os metodos são os seguintes:
    - alterarNome
    - depósito 
    - saque

no construtor, saldo é opcional, com valor default zero e os demais atributos são obrigatórios

"""

class ContaCorrente():
    #CONSTRUTOR
    def __init__(self, numeroConta, nomeCorrentista, saldo=0):
        self.numeroConta = numeroConta
        self.nomeCorrentista = nomeCorrentista
        self.saldo = saldo
    #METODOS
    def alterarNome(self,nome):
        self.nomeCorrentista = nome
    def depositar(self,valorDeposito):
        self.saldo+=valorDeposito
    def sacar(self,valorSaque):
        self.saldo-=valorSaque
    def extrato(self):
        return self.saldo
        #return f'Seu saldo atual é de {self.saldo}'

conta1 = ContaCorrente('1234', 'Anne')
print(f'saldo inicial: {conta1.extrato()}')
conta1.alterarNome('Anne Karoline')
conta1.depositar(200)
print(f'Valor depositado: {conta1.extrato()}')
conta1.sacar(50)
print(f'Valor após saque: {conta1.extrato()}')