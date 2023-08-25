import React, { useState } from "react";

function EditarClienteForm({ cliente, onSave }) {
  const [nome, setNome] = useState(cliente.nome);
  const [situacao, setSituacao] = useState(cliente.situacao);
  const [data, setData] = useState(cliente.data);

  const handleSalvar = () => {
    onSave({ nome, situacao, data });
  };

  return (
    <div>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        value={situacao}
        onChange={(e) => setSituacao(e.target.value)}
      />
      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleSalvar}>Salvar</button>
    </div>
  );
}

export default EditarClienteForm;
