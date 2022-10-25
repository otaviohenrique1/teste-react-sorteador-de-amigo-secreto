import React from 'react';

const ListaParticipantes = () => {
  const participantes: string[] = [];
  return (
    <ul>
      {participantes.map((participante) => {
        return (
          <li>{participante}</li>
        );
      })}
    </ul>
  );
}

export default ListaParticipantes;