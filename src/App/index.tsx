import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 100px;
`;

type TThingProps = {
  word: string;
};

const Thing: React.FC<TThingProps> = props => {
  return <h1>{props.word}</h1>;
};

export default (): React.ReactElement => {
  console.error("BOOM");
  return (
    <div>
      <Title>app</Title>
      <p>Wooooooo</p>
      <Thing word="cheeses" />
    </div>
  );
};
