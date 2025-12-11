import React, { useState } from "react";
import { calcularProduto } from "./utils/precificacao";

export default function App() {
  const [dados, setDados] = useState({
    custoInsumos: "",
    custoFixo: "",
    embalagem: "",
    margem: "",
    taxa: "",
    perda: ""
  });

  const [resultado, setResultado] = useState(null);

  function handleChange(e) {
    setDados({ ...dados, [e.target.name]: e.target.value });
  }

  function calcular() {
    const resp = calcularProduto({
      custoInsumos: Number(dados.custoInsumos),
      custoFixo: Number(dados.custoFixo),
      embalagem: Number(dados.embalagem),
      margem: Number(dados.margem),
      taxa: Number(dados.taxa),
      perda: Number(dados.perda)
    });

    setResultado(resp);
  }

  return (
    <div className="container">
      <h1>Sistema de Precificação — Pastelaria</h1>

      <div className="grid">
        <input name="custoInsumos" placeholder="Custo dos insumos" onChange={handleChange} />
        <input name="custoFixo" placeholder="Custo fixo por unidade" onChange={handleChange} />
        <input name="embalagem" placeholder="Custo embalagem" onChange={handleChange} />
        <input name="margem" placeholder="Margem (%)" onChange={handleChange} />
        <input name="taxa" placeholder="Taxa maquininha (%)" onChange={handleChange} />
        <input name="perda" placeholder="Perda (%)" onChange={handleChange} />
      </div>

      <button onClick={calcular}>Calcular</button>

      {resultado && (
        <div className="resultado">
          <h2>Resultado</h2>
          <p>CMV: R$ {resultado.cmv.toFixed(2)}</p>
          <p>Preço sugerido: R$ {resultado.preco.toFixed(2)}</p>
          <p>Markup aplicado: {resultado.markup.toFixed(2)}x</p>
        </div>
      )}
    </div>
  );
}
