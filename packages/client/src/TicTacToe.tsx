import React, { useState } from "react";

const useTicTacToeState = () => {
  const [turn, setTurn] = useState("x");
  const [positions, setPositions] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ]);

  return { turn, setTurn, positions, setPositions };
};

export const TicTacToe: React.FunctionComponent = () => {
  const { turn, setTurn, positions, setPositions } = useTicTacToeState();

  const takeTurnAtPosition = (position: number) => () => {
    positions[position] = turn;
    console.log(positions);
    setPositions(positions);
    setTurn(turn === "x" ? "o" : "x");
  };

  return (
    <>
      <div>Current player: {turn}</div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            borderBottom: "1px solid black",
            borderRight: "1px solid black",
            flex: 1,
            height: 100
          }}
          onClick={takeTurnAtPosition(0)}
        >
          {positions[0]}
        </div>
        <div
          style={{
            borderBottom: "1px solid black",
            borderRight: "1px solid black",
            flex: 1,
            height: 100
          }}
          onClick={takeTurnAtPosition(1)}
        >
          {positions[1]}
        </div>
        <div
          style={{ borderBottom: "1px solid black", flex: 1, height: 100 }}
          onClick={takeTurnAtPosition(2)}
        >
          {positions[2]}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            borderBottom: "1px solid black",
            borderRight: "1px solid black",
            flex: 1,
            height: 100
          }}
          onClick={takeTurnAtPosition(3)}
        >
          {positions[3]}
        </div>
        <div
          style={{
            borderBottom: "1px solid black",
            borderRight: "1px solid black",
            flex: 1,
            height: 100
          }}
          onClick={takeTurnAtPosition(4)}
        >
          {positions[4]}
        </div>
        <div
          style={{ borderBottom: "1px solid black", flex: 1, height: 100 }}
          onClick={takeTurnAtPosition(5)}
        >
          {positions[5]}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            borderRight: "1px solid black",
            flex: 1,
            height: 100
          }}
          onClick={takeTurnAtPosition(6)}
        >
          {positions[6]}
        </div>
        <div
          style={{
            borderRight: "1px solid black",
            flex: 1,
            height: 100
          }}
          onClick={takeTurnAtPosition(7)}
        >
          {positions[7]}
        </div>
        <div style={{ flex: 1, height: 100 }} onClick={takeTurnAtPosition(8)}>
          {positions[8]}
        </div>
      </div>
    </>
  );
};
