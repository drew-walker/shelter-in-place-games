import React from "react";

export const Game: React.FunctionComponent<{
  title: string;
}> = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
};
