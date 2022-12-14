import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../hook/useListaDeParticipantes";
import Rodape from "./Rodape";

jest.mock('../hook/useListaDeParticipantes', () => {
  return {
    useListaDeParticipantes: jest.fn() // se comporta como funcao
  };
});

const mockNavegacao = jest.fn();
const mockSorteio = jest.fn();

jest.mock('../hook/useSorteador', () => {
  return {
    useSorteador: () => mockSorteio // se comporta como funcao
  };
});

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavegacao // se comporta como funcao
  };
});

describe("quando não existem participantes suficientes", () => {
  // Antes de cada teste
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([]); // Comeca adicionando um array vazio
  });

  test('a brincadeira não pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");

    expect(botao).toBeDisabled();
  });
});

describe("quando existem participantes suficientes", () => {
  // Antes de cada teste
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(['Ana', 'Catarina', 'Josefina']); // Comeca adicionando um array com 3 itens
  });

  test('a brincadeira pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");

    expect(botao).not.toBeDisabled();
  });

  test('a brincadeira foi iniciada', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");

    fireEvent.click(botao);

    expect(mockNavegacao).toHaveBeenCalledTimes(1);
    expect(mockNavegacao).toHaveBeenCalledWith("/sorteio");
    expect(mockSorteio).toHaveBeenCalledTimes(1);
  });
});
