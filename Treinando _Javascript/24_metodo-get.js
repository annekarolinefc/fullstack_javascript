class ResourceProcessStation{
    constructor(nameSpaceship, monthlyProcessedLoad){
        this.nameSpaceship = nameSpaceship;
        this.monthlyProcessedLoad = monthlyProcessedLoad
    }
    get weeklyProcessedLoad(){
        return this.monthlyProcessedLoad / 4;
    }
}


//instanciando a classe
let resourceProcessor = new ResourceProcessStation("Gaia", 500)
console.log(resourceProcessor.weeklyProcessedLoad)

resourceProcessor.monthlyProcessedLoad = 600;
console.log(resourceProcessor.weeklyProcessedLoad)