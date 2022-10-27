import React, { FormEvent, useState } from 'react';
import { useListaDeParticipantes } from '../hook/useListaDeParticipantes';
import { useResultadoSorteio } from '../hook/useResultadoSorteio';

const Sorteio = () => {
  const [participanteDaVez, setParticipanteDaVez] = useState<string>("");
  const [amigoSecreto, setAmigoSecreto] = useState<string>("");

  const participantes = useListaDeParticipantes();

  const resultado = useResultadoSorteio();

  const sortear = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
    }
  };

  return (
    <section>
      <form
        onSubmit={sortear}
      >
        <select 
          name="participanteDavez" 
          id="participanteDavez"
          required
          value={participanteDaVez}
          onChange={(event) => setParticipanteDaVez(event.target.value)}
        >
          {participantes.map((participante) => {
            return (
              <option
                key={participante}
              >{participante}</option>
            );
          })}
        </select>
        <button>Sortear</button>
      </form>
    </section>
  );
}

export default Sorteio;