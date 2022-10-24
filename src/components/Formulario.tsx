import React, { FormEvent, useRef, useState } from 'react';
import { useAdicionarParticipante } from '../hook/useAdicionarParticipante';
import { useMensagemDeErro } from '../hook/useMensagemDeErro';

const Formulario = () => {
  const [nome, setNome] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarNaLista = useAdicionarParticipante();

  const mensagemDeErro = useMensagemDeErro();

  const adicionarParticipante = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    adicionarNaLista(nome);
    setNome("");
    inputRef?.current?.focus();
  };

  return (
    <form onSubmit={adicionarParticipante}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Insira os nomes dos participantes"
        value={nome}
        onChange={event => setNome(event.target.value)}
      />
      <button
        // type="button"
        disabled={!nome}
      >Adicionar</button>
      {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
    </form>
  );
}

export default Formulario;