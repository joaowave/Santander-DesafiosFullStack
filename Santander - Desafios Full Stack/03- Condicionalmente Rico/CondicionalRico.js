// Entrada dos dados
let saldoTotal = parseInt(gets());
let valorSaque = parseInt(gets());

// Cálculo para o saldo disponível
let saldoDisponível = saldoTotal - valorSaque;

// Aqui nós verificamos a condição para o saque
if (saldoDisponível >= 0) {
  // Exibo aqui uma mensagem de sucesso para o cliente
  print("Saque realizado com sucesso. Novo saldo: " + saldoDisponível);
} else {
  // E aqui a ocasião de saldo insuficiente em conta, também exibido ao usuário
  print("Saldo insuficiente. Saque nao realizado!");
}
