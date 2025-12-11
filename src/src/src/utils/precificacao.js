export function calcularProduto({
  custoInsumos,
  custoFixo,
  embalagem,
  margem,
  taxa,
  perda
}) {
  const totalCusto = custoInsumos + custoFixo + embalagem;
  const custoComPerda = totalCusto * (1 + perda / 100);
  const custoFinal = custoComPerda * (1 + taxa / 100);
  const preco = custoFinal * (1 + margem / 100);
  const cmv = totalCusto;
  const markup = preco / totalCusto;

  return { preco, cmv, markup };
}
