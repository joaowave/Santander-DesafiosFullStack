const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function realizarSaque(saldoTotal, valorSaque) {
  if (saldoTotal >= valorSaque) {
    saldoTotal -= valorSaque;
    console.log(`Saque realizado com sucesso! Novo saldo: ${saldoTotal}`);
  } else {
    console.log("Saldo insuficiente. Saque não realizado!");
  }
}

rl.question("Informe o saldo total da conta: ", (saldoTotal) => {
  rl.question("Informe o valor do saque: ", (valorSaque) => {
    saldoTotal = parseInt(saldoTotal);
    valorSaque = parseInt(valorSaque);
    realizarSaque(saldoTotal, valorSaque);
    rl.close();
  });
});
