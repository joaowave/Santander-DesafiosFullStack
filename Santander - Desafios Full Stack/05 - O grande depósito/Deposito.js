const valor = parseFloat(gets());

if (valor > 0) {
  // Se o valor for maior que zero, realizar o depósito
  // e exibir a mensagem de sucesso com o saldo atual
  const saldoAtual = valor;
  print("Deposito realizado com sucesso!");
  print(`Saldo atual: R$ ${saldoAtual.toFixed(2)}`);
} else if (valor < 0) {
  // Se o valor for negativo, exibir a mensagem de valor inválido
  print("Valor invalido! Digite um valor maior que zero.");
} else {
  // Se o valor for zero, exibir a mensagem de encerrar o programa
  print("Encerrando o programa...");
}
