import React from "react";
import { Router, RouteComponentProps } from "@reach/router";

import { B500 } from "./colors";
import HomeIcon from "@atlaskit/icon/glyph/home";

import { TicTacToe } from "./TicTacToe";
import { Game } from "./Game";
import { GameNavigation } from "./GameNavigation";

const TicTacToeRoute: React.FunctionComponent<RouteComponentProps> = () => (
  <Game title="Tic-tac-toe">
    <TicTacToe />
  </Game>
);

const CodebreakerRoute: React.FunctionComponent<RouteComponentProps> = () => (
  <Game title="Codebreaker">Coming soon</Game>
);

const Home: React.FunctionComponent<RouteComponentProps> = () => (
  <h2>Shelter-in-place games</h2>
);

export const ShelterInPlace: React.FunctionComponent = () => {
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
      <GameNavigation />
      <div style={{ width: 640, margin: "0 auto", padding: 20 }}>
        <Router>
          <Home path="/" />
          <TicTacToeRoute path="/tic-tac-toe" />
          <CodebreakerRoute path="/codebreaker" />
        </Router>
      </div>
    </div>
  );
};
