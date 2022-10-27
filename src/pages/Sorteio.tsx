import React, { FormEvent, useState } from 'react';
import Card from '../components/Card';
import { useListaDeParticipantes } from '../hook/useListaDeParticipantes';
import { useResultadoSorteio } from '../hook/useResultadoSorteio';
import './Sorteio.css';

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
    <Card>
      <section className="sorteio">
        <h2>Quem vai tirar o papelzinho?</h2>
        <form
          onSubmit={sortear}
        >
          <select
            name="participanteDavez"
            id="participanteDavez"
            required
            placeholder="Selecione o seu nome"
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
          <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
          <button className="botao-sortear">Sortear</button>
          {amigoSecreto && <p
            className="resultado"
            role="alert"
          >{amigoSecreto}</p>}
          <footer className="sorteio">
            <img src="/imagens/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
          </footer>
        </form>
      </section>
    </Card>
  );
}

export default Sorteio;