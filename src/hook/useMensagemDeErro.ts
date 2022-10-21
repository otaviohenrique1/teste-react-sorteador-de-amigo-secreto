import { useSetRecoilState } from "recoil";
import { erroState } from "../state/atom";

export const useMensagemDeErro = () => {
  const mensagem = useSetRecoilState(erroState);

  return mensagem;
};
