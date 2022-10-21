import React from 'react';

const Formulario = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Insira os nomes dos participantes"
      />
      <button
        type="button"
        disabled={true}
      >Adicionar</button>
    </form>
  );
}

export default Formulario;