"""
Classe Bola: Crie uma claase que modele uma bola

    Atributos: Cor, circunferencia, material
    Métodos: trocaCor e mostraCor
"""
#CRIANDO A CLASSE
class Bola():
    #construtor da classe
    def __init__(self, cor, circunferencia, material):
        self.cor=cor 
        self.circunferencia = circunferencia
        self.material = material
    #métodos da classe
    def trocaCor(self, nova_cor):
        self.cor = nova_cor
    def mostraCor(self):
        return self.cor

#INSTANCIANDO A CLASSE
jabulani = Bola('azul', '3', 'couro')
print(jabulani.mostraCor())
jabulani.trocaCor('verde')
print(jabulani.mostraCor())
