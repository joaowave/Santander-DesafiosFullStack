// Função que calcula o valor final de um investimento com base em juros compostos
function calcularValorFinalInvestimento(valorInicial, taxaJuros, periodo) {
  // Calcula o valor final levando em conta o valor inicial, a taxa de juros e o período de tempo
  const valorFinal = valorInicial * Math.pow(1 + taxaJuros, periodo);

  // Arredonda o valor final para duas casas decimais, para que pareça dinheiro
  const valorFinalFormatado = valorFinal.toFixed(2);

  // Retorna uma mensagem com o valor final formatado em reais
  return `Valor final do investimento: R$ ${valorFinalFormatado}`;
}

// Entrada de dados: valor inicial, taxa de juros anual e período em anos
const valorInicial = parseFloat(gets());
const taxaJuros = parseFloat(gets());
const periodo = parseInt(gets());

// Chama a função de cálculo e imprime o resultado de forma amigável
print(calcularValorFinalInvestimento(valorInicial, taxaJuros, periodo));
