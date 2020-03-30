import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 100px;
`;

type TThingProps = {
  word: string;
};

const Thing: React.FC<TThingProps> = (props: TThingProps): React.ReactElement => {
  const { word } = props;
  return <h3>{word}</h3>;
};

export default (): React.ReactElement => (
  <div>
    <Title>app</Title>

    <p>Wooooooo</p>
    <Thing word="moose" />
  </div>
);
