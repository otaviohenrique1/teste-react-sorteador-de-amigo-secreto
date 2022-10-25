import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../hook/useListaDeParticipantes";
import Configuracao from "./Configuracao";

describe("quando não existem participantes suficientes", () => {
  test('a brincadeira não pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Configuracao />
      </RecoilRoot>
    );

    // const botao = screen.getByRole("button");

    // expect(botao).toBeDisabled();
  });
});
