import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../hook/useListaDeParticipantes";
import Sorteio from "./Sorteio";

jest.mock('../hook/useListaDeParticipantes', () => {
  return {
    useListaDeParticipantes: jest.fn()
  };
});

describe("a pagina de sorteio", () => {
  const participantes = ['Ana', 'Catarina', 'Jorel'];

  // Antes de cada teste
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
  });

  test('todos os participantes podem exibir o seu amigo secreto', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const opcoes = screen.queryAllByRole('option');

    expect(opcoes).toHaveLength(participantes.length);
  });

  test('o amigo secreto é exibido quando solicitado', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );
    
    const select = screen.getByPlaceholderText("Selecione o seu nome");

    fireEvent.change(select, {
      target: {
        value: participantes[0]
      }
    });
    

    const botao = screen.getByRole("button");

    fireEvent.click(botao);
    
    const amigoSecreto = screen.getByRole("alert");

    expect(amigoSecreto).toBeInTheDocument();
  });
});
