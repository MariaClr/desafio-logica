function partidas(vitorias, derrotas) {
    let saldoRankeadas = vitorias - derrotas;
    let nivel = "";
  
    if (vitorias < 10) {
      nivel = 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = 'Lendário';
    } else {
      nivel = 'Imortal';
    }
  
    return { saldoRankeadas, nivel };
  }
  
  let resultado = partidas(10, 6);
  let saldo = resultado.saldoRankeadas;
  let nivel = resultado.nivel;
  
  console.log(`O Herói tem saldo de ${saldo} e está no nível de ${nivel}`);

  let um = partidas(3, 5)
  let s = um.saldoRankeadas
  console.log( um, s)

console.log(partidas.nivel)
console.log(partidas(0).saldoRankeadas)

const posicaoInicial = parseInt(gets());
const totalPassos = parseInt(gets());

//TODO: Calcule a posição final do herói:
const posicaoFinal = posicaoInicial + posicaoFinal;

// Imprime a posição final
print("Posicao final do heroi:", posicaoFinal);


let escolhaDoTreinador = parseInt(1);
let pokemonEscolhido = ' '

//TODO: Implemente as condições necessárias para a solução do desafio. Utilize a tabela de exemplos para identificar a escolha do treinador:
if ( escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbasaur";
} else if ( escolhaDoTreinador === 2 ) {
    pokemonEscolhido = "Charmander";
} else if ( escolhaDoTreinador === 3) {
    pokemonEscolhido = "Pikachu";
} else if ( escolhaDoTreinador === 3){
  pokemonEscolhido = "Pikachu";
}
console.log("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");
