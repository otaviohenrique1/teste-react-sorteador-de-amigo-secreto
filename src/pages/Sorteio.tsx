import React from 'react';
import { useListaDeParticipantes } from '../hook/useListaDeParticipantes';

const Sorteio = () => {
  const participantes = useListaDeParticipantes();

  return (
    <section>
      <form>
        <select 
          name="participanteDavez" 
          id="participanteDavez"
        >
          {participantes.map((participante) => {
            return (
              <option
                key={participante}
              >{participante}</option>
            );
          })}
        </select>
      </form>
    </section>
  );
}

export default Sorteio;