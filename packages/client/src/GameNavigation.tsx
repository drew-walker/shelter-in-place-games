import React from "react";
import { Link } from "@reach/router";

import { N20 } from "./colors";

const LINK_STYLE = {
  display: "block",
  padding: "8px 12px 7px",
  color: "#42526e",
  fontSize: 14,
  textDecoration: "none"
};

export const GameNavigation = () => {
  return (
    <div style={{ backgroundColor: N20, width: 240 }}>
      <nav style={{ padding: "8px 16px" }}>
        <Link style={LINK_STYLE} to="/tic-tac-toe">
          Tic-tac-toe
        </Link>
        <Link style={LINK_STYLE} to="/codebreaker">
          Codebreaker
        </Link>
        <Link style={LINK_STYLE} to="/sudoku">
          Sudoku
        </Link>
        <Link style={LINK_STYLE} to="/solitaire">
          Solitaire
        </Link>
        <Link style={LINK_STYLE} to="/crosswords">
          Crosswords
        </Link>
      </nav>
    </div>
  );
};
