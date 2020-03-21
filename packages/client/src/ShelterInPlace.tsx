import React from "react";

import { N20, B500 } from "./colors";
import HomeIcon from "@atlaskit/icon/glyph/home";

export const ShelterInPlace = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          backgroundColor: B500,
          width: 64,
          height: "100vh",
          color: "#FFF",
          padding: "16px 0",
          alignItems: "center"
        }}
      >
        <HomeIcon label="home" />
      </div>
      <div style={{ backgroundColor: N20, width: 240 }}>
        <a href="/tic-tac-toe">Tic-tac-toe</a>
      </div>
    </div>
  );
};
