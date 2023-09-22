//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const saldoAtual = parseFloat(gets());
const valorDeposito = parseFloat(gets());
const valorRetirada = parseFloat(gets());


const saldoAtualizado = saldoAtual + valorDeposito - valorRetirada;


print(`Saldo atualizado na conta: ${saldoAtualizado.toFixed(1)}`);
