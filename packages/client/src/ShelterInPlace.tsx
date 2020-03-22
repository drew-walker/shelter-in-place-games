import React from "react";

import { N20, B500 } from "./colors";
import HomeIcon from "@atlaskit/icon/glyph/home";

import { useHistory } from "./useHistory";

import { TicTacToe } from "./TicTacToe";
import { Game } from "./Game";

export const ShelterInPlace: React.FunctionComponent = () => {
  const { currentLocation } = useHistory();

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          backgroundColor: B500,
          width: 40,
          height: "100vh",
          padding: "16px 12px",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <a href="/" style={{ color: "#FFF" }}>
          <HomeIcon label="home" />
        </a>
      </div>
      <div style={{ backgroundColor: N20, width: 240 }}>
        {currentLocation === "/tic-tac-toe" ? (
          "Tic-tac-toe"
        ) : (
          <a href="/tic-tac-toe">Tic-tac-toe</a>
        )}
      </div>
      <div style={{ width: 640, margin: "0 auto", padding: 20 }}>
        {currentLocation === "/" && <h2>Shelter-in-place games</h2>}
        {currentLocation === "/tic-tac-toe" && (
          <Game title="Tic-tac-toe">
            <TicTacToe />
          </Game>
        )}
      </div>
    </div>
  );
};
