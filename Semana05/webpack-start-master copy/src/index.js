import spaceship from "./spaceship";
import spaceshipEngine from "./spaceshipEngine";

const sophia = new spaceship("Sophia", 10, 5)
const amsterda = new spaceship("Amsterdã", 15, 10)
const dwarfStart = new spaceship("Estrela-Anã", 20, 4)


const sophiaEngine = new spaceshipEngine(sophia)
const amnsterdaoEngine = new spaceshipEngine(amsterda)
const dwarfStartEngine = new spaceshipEngine(dwarfStart)

sophiaEngine.turnOn()
amsterda.turnOn()