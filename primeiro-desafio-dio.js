let nome = "Clara"
let QuantExperiencia = 6000

let nivel = " "

switch (true) {
    case QuantExperiencia < 1001:
        nivel = "ferro";
        break;
    case QuantExperiencia > 1001 && QuantExperiencia < 2001:
        nivel = "bronze";
        break;
    case QuantExperiencia > 2001 && QuantExperiencia < 5001:
        nivel = "prata";
        break
    case QuantExperiencia > 5001 && QuantExperiencia < 6001:
        nivel = "ouro";
        break
    case QuantExperiencia > 6001 && QuantExperiencia < 7001:
        nivel = "platina";
        break
    case QuantExperiencia > 7001 && QuantExperiencia < 8001:
        nivel = "ascendente";
        break
    case QuantExperiencia > 8001 && QuantExperiencia < 9001:
        nivel = "imortal";
        break
    case QuantExperiencia > 9001 && QuantExperiencia < 10001:
        nivel = "Radiante";
        break
    }

console.log('O herói de nome ' + nome + ' está no nível de ' + nivel);
