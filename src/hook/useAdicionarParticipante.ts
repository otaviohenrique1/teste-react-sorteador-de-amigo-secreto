import { useRecoilValue, useSetRecoilState } from "recoil";
import { erroState, listaParticipantesState } from "../state/atom";

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaParticipantesState);

  const lista = useRecoilValue(listaParticipantesState);

  const setErro = useSetRecoilState(erroState);

  return (nomeDoParticipante: string) => {
    if (lista.includes(nomeDoParticipante)) {
      setErro("Nomes duplicados não são permitidos!");
      return;
    }

    return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
  };
};

/*
Array.prototype.includes() => O includes()método determina se um array inclui um determinado valor entre suas entradas, retornando trueou falseconforme apropriado.
*/