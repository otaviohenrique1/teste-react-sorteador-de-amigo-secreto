import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useListaDeParticipantes } from '../hook/useListaDeParticipantes';
import './Rodape.css';

const Rodape = () => {
  const participantes = useListaDeParticipantes();

  const navegarPara = useNavigate();

  const iniciar = () => {
    navegarPara("/sorteio");
  };

  return (
    <footer className="rodape-configuracoes">
      <button
        className="botao"
        disabled={participantes.length < 3}
        onClick={iniciar}
      >Iniciar brincadeira</button>
    </footer>
  );
}

export default Rodape;