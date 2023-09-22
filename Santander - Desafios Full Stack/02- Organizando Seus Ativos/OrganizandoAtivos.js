//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.const ativos = [];

const quantidadeAtivos = parseInt(gets());
const ativos = [];

for (let i = 0; i < quantidadeAtivos; i++) {
  const tipoAtivo = gets();
  ativos.push(tipoAtivo);
}

ativos.sort();

for (const ativo of ativos) {
  print(ativo);
}
