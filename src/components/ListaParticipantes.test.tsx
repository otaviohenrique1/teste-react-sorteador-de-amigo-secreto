import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../hook/useListaDeParticipantes";
import ListaParticipantes from "./ListaParticipantes";

jest.mock('../hook/useListaDeParticipantes', () => {
  return {
    useListaDeParticipantes: jest.fn()
  };
})

describe("uma lista vazia de participantes", () => {
  // Antes de cada teste
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
  });

  test('deve ser renderizada sem elementos', () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );
    
    const itens = screen.queryAllByRole("listitem");
  
    expect(itens).toHaveLength(0);
  });
});

describe("uma lista preenchida de participantes", () => {
  const participantes = ['Ana', 'Catarina'];

  // Antes de cada teste
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
  });

  test('deve ser renderizada sem elementos', () => {

    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );
    
    const itens = screen.queryAllByRole("listitem");
  
    expect(itens).toHaveLength(participantes.length);
  });
});
