import { useSetRecoilState } from "recoil";
import { realizarSorteio } from "../helpers/realizarSorteio";
import { resultadoAmigoSecreto } from "../state/atom";
import { useListaDeParticipantes } from "./useListaDeParticipantes";

export const useSorteador = () => {
  const participantes = useListaDeParticipantes();

  const setResultado = useSetRecoilState(resultadoAmigoSecreto);

  return () => {
    const resultado = realizarSorteio(participantes);

    setResultado(resultado);
  };
};