let anosLuz = prompt("Insira a distância em anos-luz: ")
let unidadeDesejada = prompt("Insira a unidade que deseja converter: \n1 - Parse(pc) \n2 - Unidade astronônima(AU) \n3 - Quilômetros(km) \n\n (Digite o número da opção desejada.)")
let valorConvertido;
let nomeUnidade;
switch (unidadeDesejada){
    case "1":
        nomeUnidade = "Parse (pc)"
        valorConvertido = anosLuz * 0.306601;
        alert(`Distância em Anos-luz: ${anosLuz} \n ${nomeUnidade} : ${valorConvertido}`);
        break;10
    case "2":
        nomeUnidade = "Unidade astronômica (AU)"
        valorConvertido = anosLuz * 63241,1;
        alert(`Distância em Anos-luz: ${anosLuz} \n ${nomeUnidade} : ${valorConvertido}`);
        break;
    case "3": 
        nomeUnidade = "Quilômetros (km)"
        valorConvertido = anosLuz * 9,5 * Math.pow(10,12);
        alert(`Distância em Anos-luz: ${anosLuz} \n ${nomeUnidade} : ${valorConvertido}`);
        break;
    default:
        alert(`Distância em Anos-luz: ${anosLuz} \n Unidade não identificada : Conversão fora do escopo`);
        break;
}