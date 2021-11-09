"""
Classe carro: implemente uma claase carro com as seguintes propriedades

Um veiculo tem um certo consumo de combustível (medido cm km/litro) e 
    uma certa quantidade de combustivel no tanque.
O carro é especificado no constructior e o nível do combustivel inicial é 0.
Fornceca um metodo andar() que simule o ato de dirigir o veiculo por uma 
certa distância, reduzindo o npivel de combustivel no tanque de gasolina.
Forneça um metodo obterGasolina(), que retorna o nível atual de combustivel
Forcença um metodo adicionarGasolina(), que abastece o tanque. Exemplo de uso:

meuFusca = Carro(15)  ...  15 quilometros por litro de vombustivel
meuFusca.adicionarGasolina(20)  ---   abastece com 20 litros de combustivel
meuFusca.andar(100)   ...   anda 100 quilometros
meuFusca.obterGasolina()   ...   Imprime o combustivel que resta no tanque

"""

class Carro():
    #construtor
    def __init__(self, consumo):
        self.consumo = consumo
        self.nivel_combustivel=0
    #metodos
    def obterGasolina(self):
        return self.nivel_combustivel
    def adicionarGasolina(self, gasolina):
        self.nivel_combustivel+=gasolina
    def andar(self,km):
        consumo = km/self.consumo
        self.nivel_combustivel=+consumo
       

meuFusca=Carro(15)
meuFusca.adicionarGasolina(20)
meuFusca.andar(100)
print(meuFusca.obterGasolina())
